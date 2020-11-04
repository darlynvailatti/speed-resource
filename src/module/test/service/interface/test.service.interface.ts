export interface TestServiceInterface {
  createTest(createTestRequestDto: CreateTestRequest): Promise<TestModel.Test>;
  getList(getListTest: GetTestListRequest): Promise<TestListResponse>;
  putExecution(putExecution: PutExecution): Promise<TestModel.Test>;
}

export namespace TestModel {
  export class Template {
    id: number;
    description: string;
  }

  export class Test {
    id: number;
    description: string;
    state: string;
    template: Template;
    executions?: TestExecution.Execution[];
  }
}

export class CreateTestRequest {
  description: string;
  template: {
    id: number;
  };
}

export class GetTestListRequest {
  page: number;
  size: number;
}

export class TestListResponse {
  tests: TestModel.Test[];
  page: number;
  totalPages: number;
  pageSize: number;
  totalSize: number;
}

namespace TestExecution {
  export class Node {
    code: string;
  }

  export class Edge {
    sequence: number;
    description: string;
    startTimeStamp: number;
    endTimeStamp: number;
    distance: number;
    startNode: Node;
    endNode: Node;
  }

  export class Turn {
    number: number;
    startTimeStamp: number;
    endTimeStamp: number;
    edges: Edge[];
  }

  export class Execution {
    date: Date;
    turns: Turn[];
  }
}

export class PutExecution {
  testId: number;
  execution: TestExecution.Execution;
}
