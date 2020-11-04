import { Injectable } from '@nestjs/common';
import { BussinesException } from 'src/common/exceptions';
import { AbstractProcessor } from 'src/common/processor.interface';
import { TemplateBusinessExceptions } from 'src/constants/exception.maps';
import { TestTemplateRepository } from '../../repository/test-template.repository';
import {
  CreateTestTemplateRequest,
  CreateTestTemplateResponse,
  TestTemplate,
} from '../interface/test-template.service.interface';
import {
  TestTemplateValidatorService,
  ValidationRequestDTO,
} from './test-template-validator.processor';

@Injectable()
export class CreateTestTemplateProcessor extends AbstractProcessor<
  CreateTestTemplateRequest,
  CreateTestTemplateResponse
> {
  constructor(
    private readonly testTemplateRepository: TestTemplateRepository,
    private readonly testTemplateValidatorService: TestTemplateValidatorService,
  ) {
    super(CreateTestTemplateProcessor.name);
  }

  async checkInput(input: CreateTestTemplateRequest): Promise<void> {
    return null;
  }

  async execute(
    input: CreateTestTemplateRequest,
  ): Promise<CreateTestTemplateResponse> {
    const testTemplate: TestTemplate = {
      description: input.description,
      graph: input.graph,
    };
    const validationRquest: ValidationRequestDTO = {
      testTemplate: testTemplate,
    };
    const validationResponse = await this.testTemplateValidatorService.perform(
      validationRquest,
    );
    if (!validationResponse.isValid)
      throw new BussinesException(
        TemplateBusinessExceptions.TEMPLATE_IS_NOT_VALID,
        [validationResponse.causeIfIsNotValid],
      );

    const createdTestTemplate = await this.testTemplateRepository.createTestTemplate(
      testTemplate,
    );

    return {
      template: createdTestTemplate,
    };
  }
}
