import {
  paginate,
  IPaginationOptions,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { EntityRepository, Repository } from 'typeorm';
import { TestEntity } from '../model/test.entity';

@EntityRepository(TestEntity)
export class TestRepository extends Repository<TestEntity> {
  async paginate(options: IPaginationOptions): Promise<Pagination<TestEntity>> {
    return paginate<TestEntity>(this, options);
  }
}
