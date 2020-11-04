import { Injectable } from '@nestjs/common';
import { AbstractProcessor } from 'src/common/processor.interface';
import { TestRepository } from '../../repository/test.repository';
import {
  TestListResponse,
  TestModel,
  GetTestListRequest,
} from '../interface/test.service.interface';

@Injectable()
export class GetTestListProcessor extends AbstractProcessor<
  GetTestListRequest,
  TestListResponse
> {
  constructor(private readonly testRepository: TestRepository) {
    super(GetTestListProcessor.name);
  }

  async checkInput(input: GetTestListRequest): Promise<void> {}

  async execute(input: GetTestListRequest): Promise<TestListResponse> {
    const page = input.page;
    const size = input.size;

    const paginatedResult = await this.testRepository.paginate({
      limit: size,
      page: page,
    });
    const tests = paginatedResult.items;
    const mappedTests = tests.map(t => {
      const testDto: TestModel.Test = {
        id: t.id,
        description: t.description,
        state: t.state.toString(),
        template: {
          id: t.template.id,
          description: t.description,
        },
      };
      return testDto;
    });

    return {
      tests: mappedTests,
      page: page,
      totalPages: paginatedResult.meta.totalPages,
      pageSize: paginatedResult.meta.itemCount,
      totalSize: paginatedResult.meta.totalItems,
    };
  }
}
