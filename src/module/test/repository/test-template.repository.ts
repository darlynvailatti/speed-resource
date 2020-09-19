import { EntityRepository, Repository } from 'typeorm';
import { TestTemplateEntity } from '../model/test-template.entity';
import {
  Graph,
  TestTemplate,
} from '../service/interface/test-template.service.interface';

@EntityRepository(TestTemplateEntity)
export class TestTemplateRepository extends Repository<TestTemplateEntity> {
  async createTestTemplate(template: TestTemplate): Promise<TestTemplate> {
    const graphAsJson = JSON.stringify(template.graph);
    let newTestTemplate = this.create({
      description: template.description,
      graph: graphAsJson,
    });

    newTestTemplate = await this.save(newTestTemplate);

    return {
      code: newTestTemplate.id,
      description: newTestTemplate.description,
      graph: template.graph,
    };
  }

  async findByIdAndParse(id: number): Promise<TestTemplate> {
    const testTemplateById = await this.findOne(id);
    if (!testTemplateById) return null;
    const parsedGraph: Graph = JSON.parse(testTemplateById.graph);
    return {
      code: testTemplateById.id,
      description: testTemplateById.description,
      graph: parsedGraph,
    };
  }
}
