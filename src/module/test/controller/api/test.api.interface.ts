import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export const TAG = 'test';

export interface TestApiInterface {
  createTest(createTest: CreateTestDto): Promise<TestModelDto.TestDto>;

  putExecution(
    testId: number,
    putExecution: PutExecutionDto,
  ): Promise<TestModelDto.TestDto>;

  getList(request: GetListTestDto): Promise<TestListDto>;
}

export namespace TestExecutionDto {
  export class NodeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code: string;
  }

  export class EdgeDto {
    @ApiProperty()
    @IsNumber()
    sequence: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    startTimeStamp: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    endTimeStamp: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    distance: number;

    @ApiProperty({ type: NodeDto })
    @ValidateNested()
    @Type(() => NodeDto)
    startNode: NodeDto;

    @ApiProperty({ type: NodeDto })
    @ValidateNested()
    @Type(() => NodeDto)
    endNode: NodeDto;
  }

  export class TurnDto {
    @ApiProperty()
    @IsNumber()
    number: number;

    @ApiProperty()
    @IsNumber()
    startTimeStamp: number;

    @ApiProperty()
    @IsNumber()
    endTimeStamp: number;

    @ApiProperty({ type: [EdgeDto] })
    @ValidateNested({ each: true })
    @Type(() => EdgeDto)
    edges: EdgeDto[];
  }

  export class ExcecutionDto {
    @ApiProperty({ type: Date })
    @IsDateString()
    date: Date;

    @ApiProperty({ type: [TurnDto] })
    @ValidateNested({ each: true })
    @Type(() => TurnDto)
    turns: TurnDto[];
  }
}

export namespace TestModelDto {
  export class TemplateDto {
    @ApiProperty() id: number;
    @ApiProperty() description: string;
  }

  export class TestDto {
    @ApiProperty() id: number;
    @ApiProperty() description: string;
    @ApiProperty() state: string;
    @ApiProperty({ type: TemplateDto }) template: TemplateDto;
    @ApiProperty({ type: [TestExecutionDto.ExcecutionDto] })
    executions?: TestExecutionDto.ExcecutionDto[];
  }
}

export class PutExecutionDto {
  @ApiProperty({ type: TestExecutionDto.ExcecutionDto })
  @ValidateNested({ each: true })
  @Type(() => TestExecutionDto.ExcecutionDto)
  execution: TestExecutionDto.ExcecutionDto;
}

export class GetListTestDto {
  @ApiProperty()
  page: number;

  @ApiProperty()
  size: number;
}

export class TestListDto {
  @ApiProperty({ type: [TestModelDto.TestDto] })
  tests: TestModelDto.TestDto[];

  @ApiProperty()
  @IsNumber()
  page: number;

  @ApiProperty()
  @IsNumber()
  totalPages: number;

  @ApiProperty()
  @IsNumber()
  pageSize: number;

  @ApiProperty()
  @IsNumber()
  totalSize: number;
}

export class CreateTestDto {
  @ApiProperty() description: string;
  @ApiProperty() template: {
    id: number;
  };
}
