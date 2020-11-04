import { Injectable } from '@nestjs/common';
import { BussinesException } from 'src/common/exceptions';
import { AbstractProcessor } from 'src/common/processor.interface';
import {
  TemplateBusinessExceptions,
  TestBusinessExceptions,
} from 'src/constants/exception.maps';
import { TestEntity } from '../../model/test.entity';
import { TestTemplateRepository } from '../../repository/test-template.repository';
import { TestRepository } from '../../repository/test.repository';
import {
  CreateTestRequest,
  TestModel,
} from '../interface/test.service.interface';

@Injectable()
export class CreateTestProcessor extends AbstractProcessor<
  CreateTestRequest,
  TestModel.Test
> {
  constructor(
    private readonly testTemplateRepository: TestTemplateRepository,
    private readonly testRepository: TestRepository,
  ) {
    super(CreateTestProcessor.name);
  }

  async checkInput(input: CreateTestRequest): Promise<void> {
    console.log('checking input: ' + input);
  }

  async execute(input: CreateTestRequest): Promise<TestModel.Test> {
    try {
      const template = input.template;

      if (!template || !template.id)
        throw new BussinesException(
          TestBusinessExceptions.TEMAPLATE_IS_MANDATORY_CREATE_NEW_TEST,
        );

      const templateId = template.id;

      const foundTemplate = await this.testTemplateRepository.findOne(
        templateId,
      );
      if (!foundTemplate)
        throw new BussinesException(
          TemplateBusinessExceptions.TEMPLATE_NOT_EXIST,
          [templateId],
        );

      let newTest = new TestEntity();
      newTest.description = input.description;
      newTest.template = foundTemplate;

      await this.testRepository.save(newTest);

      return {
        id: newTest.id,
        description: newTest.description,
        state: newTest.state.toString(),
        template: {
          id: foundTemplate.id,
          description: foundTemplate.description,
        },
      };
    } catch (error) {
      throw new BussinesException(
        TestBusinessExceptions.ERROR_ON_TEST_CREATION,
        [error],
      );
    }
  }
}
