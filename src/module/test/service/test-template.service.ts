import { Injectable } from '@nestjs/common';
import { BussinesException } from 'src/common/exceptions';
import { TestTemplateRepository } from '../repository/test-template.repository';
import {
  CreateTestTemplateRequest,
  CreateTestTemplateResponse,
  TestTemplate,
  TestTemplateServiceInterface,
} from './interface/test-template.service.interface';
import {
  TestTemplateValidatorService,
  ValidationRequestDTO,
} from './validation/test-template-validator.service';

@Injectable()
export class TestTemplateService implements TestTemplateServiceInterface {
  constructor(
    private readonly testTemplateRepository: TestTemplateRepository,
    private readonly testTemplateValidatorService: TestTemplateValidatorService,
  ) {}

  async createTestTemplate(
    createTestTemplate: CreateTestTemplateRequest,
  ): Promise<CreateTestTemplateResponse> {
    const testTemplate: TestTemplate = {
      description: createTestTemplate.description,
      graph: createTestTemplate.graph,
    };
    const validationRquest: ValidationRequestDTO = {
      testTemplate: testTemplate,
    };
    const validationResponse = await this.testTemplateValidatorService.validate(
      validationRquest,
    );
    if (!validationResponse.isValid)
      throw new BussinesException(
        '',
        `Error on template validation: ${validationResponse.causeIfIsNotValid}`,
      );

    const createdTestTemplate = await this.testTemplateRepository.createTestTemplate(
      testTemplate,
    );

    return {
      template: createdTestTemplate,
    };
  }

  async getTestTemplate(id: number): Promise<TestTemplate> {
    return await this.testTemplateRepository.findByIdAndParse(id);
  }
}
