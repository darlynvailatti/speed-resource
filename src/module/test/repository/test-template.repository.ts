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
      id: newTestTemplate.id,
      description: newTestTemplate.description,
      graph: template.graph,
    };
  }

  async findByIdAndParse(id: number): Promise<TestTemplate> {
    const testTemplateById = await this.findOne(id);
    if (!testTemplateById) return null;
    const parsedGraph: Graph = JSON.parse(testTemplateById.graph);
    return {
      id: testTemplateById.id,
      description: testTemplateById.description,
      graph: parsedGraph,
    };
  }

  async parseAndSave(testTemplate: TestTemplate): Promise<TestTemplate> {
    if (!testTemplate) return null;

    const parsedGraph = JSON.stringify(testTemplate.graph);

    const testTemplateModel: TestTemplateEntity = {
      id: testTemplate.id,
      description: testTemplate.description,
      graph: parsedGraph,
    };
    const savedTestTemplate = await this.save(testTemplateModel);

    return {
      id: savedTestTemplate.id,
      description: savedTestTemplate.description,
      graph: JSON.parse(savedTestTemplate.graph),
    };
  }
}
