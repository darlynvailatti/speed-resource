import { Inject, Injectable } from '@nestjs/common';
import { Processor } from 'src/common/processor.interface';
import { TestTemplateRepository } from '../repository/test-template.repository';
import {
  CreateTestTemplateRequest,
  CreateTestTemplateResponse,
  TestTemplate,
  TestTemplateServiceInterface,
  UpdateTestTemplateRequest,
  UpdateTestTemplateResponse,
} from './interface/test-template.service.interface';
import { CreateTestTemplateProcessor } from './processor/create-test-template.processor';
import { UpdateTestTemplateProcessor } from './processor/update-test-template.processor';
@Injectable()
export class TestTemplateService implements TestTemplateServiceInterface {
  constructor(
    private readonly createTestTemplateProcessor: CreateTestTemplateProcessor,
    private readonly updateTestTemplateProcessor: UpdateTestTemplateProcessor,
    private readonly testTemplateRepository: TestTemplateRepository,
  ) {}

  async createTestTemplate(
    createTestTemplate: CreateTestTemplateRequest,
  ): Promise<CreateTestTemplateResponse> {
    return await this.createTestTemplateProcessor.perform(createTestTemplate);
  }

  async getTestTemplate(id: number): Promise<TestTemplate> {
    return await this.testTemplateRepository.findByIdAndParse(id);
  }

  async updateTestTemplate(
    updateTestTemplate: UpdateTestTemplateRequest,
  ): Promise<UpdateTestTemplateResponse> {
    return await this.updateTestTemplateProcessor.perform(updateTestTemplate);
  }
}
