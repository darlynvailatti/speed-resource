import { Injectable, Logger } from '@nestjs/common';
import { LoggerFactory } from 'src/common/logger.factory';
import { AbstractProcessor } from 'src/common/processor.interface';
import { PutExecution, TestModel } from '../interface/test.service.interface';
import { TestRepository } from '../../repository/test.repository';
import { emitKeypressEvents } from 'readline';
import { TestEntity } from '../../model/test.entity';
import { BussinesException } from 'src/common/exceptions';
import { TestBusinessExceptions } from 'src/constants/exception.maps';

@Injectable()
export class PutExecutionProcessor extends AbstractProcessor<
  PutExecution,
  TestModel.Test
> {
  private input: PutExecution;
  private test: TestEntity;

  constructor(private readonly testRepository: TestRepository) {
    super(PutExecutionProcessor.name);
  }

  async checkInput(input: PutExecution): Promise<void> {
    return null;
  }

  async execute(input: PutExecution): Promise<TestModel.Test> {
    this.keepLocal(input);
    await this.findTestOrThrowException();
    throw new Error('Method not implemented.');
  }

  keepLocal(input: PutExecution) {
    this.input = input;
  }

  async findTestOrThrowException() {
    const testId = this.input.testId;
    this.test = null;
    this.test = await this.testRepository.findOne(testId);

    if (!test) {
      throw new BussinesException(TestBusinessExceptions.TEST_NOT_FOUND);
    }
  }
}
