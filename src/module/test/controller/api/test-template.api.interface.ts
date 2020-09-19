import { ApiProperty } from '@nestjs/swagger';

export const TAG = 'test-template';

export interface TestTemplateApiInterface {
  createTestTemplate(
    createTestTemplateDto: CreateTestTemplateDto,
  ): Promise<TestTemplateDto>;

  getTestTemplate(id: number): Promise<TestTemplateDto>;
}

export class SensorDto {
  @ApiProperty() code: string;
}

export class NodeDto {
  @ApiProperty() code: string;
  @ApiProperty({ type: SensorDto }) sensor: SensorDto;
}

export class EdgeDto {
  @ApiProperty() sequence: number;
  @ApiProperty() description: string;
  @ApiProperty() distance: number;
  @ApiProperty() startNode: NodeDto;
  @ApiProperty() endNode: NodeDto;
}

export class Stopwatcher {
  @ApiProperty() time: number;
  @ApiProperty() beginEdgeSequenceNumber: number;
  @ApiProperty() endEdgeSequenceNumber: number;
  @ApiProperty({ type: [Number] }) turns: [number];
}

export class GraphDto {
  @ApiProperty({ type: [EdgeDto] }) edges: [EdgeDto];
  @ApiProperty({ type: [NodeDto] }) nodes: [NodeDto];
  @ApiProperty({ type: [Stopwatcher] }) stopwatchers: [Stopwatcher];
}

export class TestTemplateDto {
  @ApiProperty({ required: false }) code?: number;
  @ApiProperty({ required: false }) description: string;
  @ApiProperty() graph: GraphDto;
}

export class CreateTestTemplateDto {
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ type: GraphDto }) graph: GraphDto;
}
