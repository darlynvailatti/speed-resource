import { Injectable } from '@nestjs/common';
import {
  TestModel,
  CreateTestRequest,
  TestListResponse,
  TestServiceInterface,
  GetTestListRequest,
  PutExecution,
} from './interface/test.service.interface';
import { CreateTestProcessor } from './processor/create-test.processor';
import { GetTestListProcessor } from './processor/get-test-list.procesor';
import { PutExecutionProcessor } from './processor/put-execution.processor';

@Injectable()
export class TestService implements TestServiceInterface {
  constructor(
    private readonly createTestProcessor: CreateTestProcessor,
    private readonly getTestListProcessor: GetTestListProcessor,
    private readonly putExecutionProcessor: PutExecutionProcessor,
  ) {}

  async createTest(
    createTestRequestDto: CreateTestRequest,
  ): Promise<TestModel.Test> {
    return await this.createTestProcessor.perform(createTestRequestDto);
  }

  async getList(
    getTestListRequest: GetTestListRequest,
  ): Promise<TestListResponse> {
    return await this.getTestListProcessor.perform(getTestListRequest);
  }

  async putExecution(putExecution: PutExecution): Promise<TestModel.Test> {
    throw await this.putExecutionProcessor.perform(putExecution);
  }
}
