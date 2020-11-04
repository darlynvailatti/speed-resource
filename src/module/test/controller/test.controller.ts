import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestService } from '../service/test.service';
import {
  CreateTestDto,
  TestApiInterface,
  TestModelDto,
  TAG,
  PutExecutionDto,
  TestListDto,
  GetListTestDto,
} from './api/test.api.interface';

@Controller({ path: 'test' })
export class TestController implements TestApiInterface {
  constructor(private readonly testService: TestService) {}

  @Post()
  @ApiOperation({ summary: 'Create new Test' })
  @ApiResponse({ status: 201, type: TestModelDto.TestDto })
  @ApiTags(TAG)
  async createTest(
    @Body() createTest: CreateTestDto,
  ): Promise<TestModelDto.TestDto> {
    return await this.testService.createTest(createTest);
  }

  @Put('/:testId/execution')
  @ApiOperation({ summary: 'Put execution on existing Test' })
  @ApiResponse({ status: 200, type: TestModelDto.TestDto })
  @ApiTags(TAG)
  async putExecution(
    @Param('testId') testId: number,
    @Body() putExecution: PutExecutionDto,
  ): Promise<TestModelDto.TestDto> {
    const putExecutionRequest = {
      testId: testId,
      execution: putExecution.execution,
    };
    return this.testService.putExecution(putExecutionRequest);
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get tests list' })
  @ApiResponse({ status: 200, type: TestListDto })
  @ApiTags(TAG)
  async getList(@Query() request: GetListTestDto): Promise<TestListDto> {
    return await this.testService.getList(request);
  }
}
