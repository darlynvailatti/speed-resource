import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestTemplate } from '../service/interface/test-template.service.interface';
import { TestTemplateService } from '../service/test-template.service';
import {
  CreateTestTemplateDto,
  TAG,
  TestTemplateApiInterface,
  TestTemplateDto,
  UpdateTestTemplateDto,
  UpdateTestTemplateResponseDto,
} from './api/test-template.api.interface';

@Controller({ path: 'test-template' })
export class TestTemplateController implements TestTemplateApiInterface {
  constructor(private readonly testTemplateService: TestTemplateService) {}

  @Post()
  @ApiOperation({ summary: 'Create new TestTemplate' })
  @ApiResponse({ status: 201, type: CreateTestTemplateDto })
  @ApiTags(TAG)
  async createTestTemplate(
    @Body() createTestTemplateDto: CreateTestTemplateDto,
  ): Promise<TestTemplateDto> {
    const createdTestTemplate = await this.testTemplateService.createTestTemplate(
      createTestTemplateDto,
    );
    return createdTestTemplate.template;
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a existing TestTemplate' })
  @ApiResponse({ status: 200, type: CreateTestTemplateDto })
  @ApiTags(TAG)
  async getTestTemplate(@Param('id') id: number): Promise<TestTemplateDto> {
    const existingTestTemplate = await this.testTemplateService.getTestTemplate(
      id,
    );
    if (!existingTestTemplate)
      throw new NotFoundException(
        TestTemplate,
        `TestTemplate id '${id}' don't exist`,
      );

    return existingTestTemplate;
  }

  @Put()
  @ApiOperation({ summary: 'Update a existing TestTemplate' })
  @ApiResponse({ status: 200, type: UpdateTestTemplateDto })
  @ApiTags(TAG)
  async updateTestTemplate(
    @Body() updateTestTemplateDto: UpdateTestTemplateDto,
  ): Promise<UpdateTestTemplateResponseDto> {
    console.log(updateTestTemplateDto);
    const updatedTestTemplate = await this.testTemplateService.updateTestTemplate(
      updateTestTemplateDto,
    );

    return {
      testTemplate: updatedTestTemplate.testTemplate,
    };
  }
}
