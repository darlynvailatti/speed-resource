import { BussinesException } from './exceptions';
import { EnsureThat } from './utils';
import { Logger } from '@nestjs/common';
import { LoggerFactory } from './logger.factory';

export interface Processor<Input, Output> {
  perform(input: Input): Promise<Output>;

  checkInput(input: Input): Promise<void>;
}

export abstract class AbstractProcessor<Input, Output>
  implements Processor<Input, Output> {
  protected logger: Logger;

  constructor(concreteName: string) {
    this.logger = LoggerFactory.getLogger(concreteName);
  }

  abstract async checkInput(input: Input): Promise<void>;

  abstract async execute(input: Input): Promise<Output>;

  async perform(input: Input): Promise<Output> {
    await this.checkInput(input);
    return await this.execute(input);
  }
}
