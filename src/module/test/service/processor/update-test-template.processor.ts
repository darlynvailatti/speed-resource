import { Injectable } from '@nestjs/common';
import { BussinesException } from 'src/common/exceptions';
import { AbstractProcessor } from 'src/common/processor.interface';
import { TemplateBusinessExceptions } from 'src/constants/exception.maps';
import { TestTemplateRepository } from '../../repository/test-template.repository';
import {
  UpdateTestTemplateRequest,
  UpdateTestTemplateResponse,
} from '../interface/test-template.service.interface';

@Injectable()
export class UpdateTestTemplateProcessor extends AbstractProcessor<
  UpdateTestTemplateRequest,
  UpdateTestTemplateResponse
> {
  constructor(private readonly testTemplateRepository: TestTemplateRepository) {
    super(UpdateTestTemplateProcessor.name);
  }

  async checkInput(input: UpdateTestTemplateRequest): Promise<void> {
    return null;
  }

  async execute(
    input: UpdateTestTemplateRequest,
  ): Promise<UpdateTestTemplateResponse> {
    const templateId = input.id;
    const existingTestTemplate = await this.testTemplateRepository.findOne(
      templateId,
    );

    if (!existingTestTemplate) {
      throw new BussinesException(
        TemplateBusinessExceptions.TEMPLATE_NOT_EXIST,
        [templateId],
      );
    }

    const testTemplate = input.testTemplate;
    testTemplate.id = templateId;

    const savedTestTemplate = await this.testTemplateRepository.parseAndSave(
      testTemplate,
    );
    return {
      testTemplate: savedTestTemplate,
    };
  }
}
