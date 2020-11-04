import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNotEmptyObject, IsNumber } from 'class-validator';

export const TAG = 'test-template';

export interface TestTemplateApiInterface {
  createTestTemplate(
    createTestTemplateDto: CreateTestTemplateDto,
  ): Promise<TestTemplateDto>;

  getTestTemplate(id: number): Promise<TestTemplateDto>;

  updateTestTemplate(
    updateTestTemplateDto: UpdateTestTemplateDto,
  ): Promise<UpdateTestTemplateResponseDto>;
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

export class StopwatcherDto {
  @ApiProperty() time: number;
  @ApiProperty() beginEdgeSequenceNumber: number;
  @ApiProperty() endEdgeSequenceNumber: number;
  @ApiProperty({ type: [Number] }) turns: [number];
}

export class GraphDto {
  @ApiProperty({ type: [EdgeDto] }) edges: [EdgeDto];
  @ApiProperty({ type: [NodeDto] }) nodes: [NodeDto];
  @ApiProperty({ type: [StopwatcherDto] }) stopwatchers: [StopwatcherDto];
}

export class TestTemplateDto {
  @ApiProperty({ required: false }) id?: number;
  @ApiProperty({ required: false }) description: string;
  @ApiProperty() graph: GraphDto;
}

export class CreateTestTemplateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ type: GraphDto })
  @IsNotEmptyObject()
  graph: GraphDto;
}

export class UpdateTestTemplateDto {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ type: TestTemplateDto, required: true })
  @IsNotEmptyObject()
  testTemplate: TestTemplateDto;
}

export class UpdateTestTemplateResponseDto {
  @ApiProperty({ type: TestTemplateDto })
  testTemplate: TestTemplateDto;
}
