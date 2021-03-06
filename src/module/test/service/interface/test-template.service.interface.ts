export interface TestTemplateServiceInterface {
  createTestTemplate(
    createTestTemplate: CreateTestTemplateRequest,
  ): Promise<CreateTestTemplateResponse>;

  getTestTemplate(id: number): Promise<TestTemplate>;

  updateTestTemplate(
    updateTestTemplate: UpdateTestTemplateRequest,
  ): Promise<UpdateTestTemplateResponse>;
}

export class Sensor {
  code: string;
}

export class Node {
  code: string;
  sensor: Sensor;
}

export class Edge {
  sequence: number;
  description: string;
  distance: number;
  startNode: Node;
  endNode: Node;
}

export class Stopwatcher {
  time: number;
  beginEdgeSequenceNumber: number;
  endEdgeSequenceNumber: number;
  turns: [number];
}

export class Graph {
  edges: [Edge];
  nodes: [Node];
  stopwatchers: [Stopwatcher];
}

export class TestTemplate {
  id?: number;
  description: string;
  graph: Graph;
}

export class CreateTestTemplateRequest {
  description: string;
  graph: Graph;
}

export class CreateTestTemplateResponse {
  template: TestTemplate;
}

export class UpdateTestTemplateRequest {
  id: number;
  testTemplate: TestTemplate;
}

export class UpdateTestTemplateResponse {
  testTemplate: TestTemplate;
}
