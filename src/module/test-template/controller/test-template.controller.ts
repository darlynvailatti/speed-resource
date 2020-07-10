import { Controller, Post, Body, Param, Res, NotFoundException, Patch, Get, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ConstantsApiTags } from "src/constants/constants";
import { TestTemplateService } from "../service/test-template.service";
import { TestTemplateFullDTO } from "./dto/test-template-full.dto";
import { CreateTestTemplateDTO } from "./dto/create-test-template.dto";
import { UpdateTestTemplateDTO } from "./dto/update-test-template.dto";


@Controller('/test-template')
export class TestTemplateController {

    constructor(private readonly testTemplateService: TestTemplateService){}

    @ApiOperation({summary: 'Create new test template'})
    @ApiResponse({status: 201, type: TestTemplateFullDTO})
    @ApiTags(ConstantsApiTags.TEST_TEMPLATE)
    @Post()
    async createNew(@Body() createNew: CreateTestTemplateDTO): Promise<TestTemplateFullDTO> {
        return await this.testTemplateService.createNew(createNew)
    }

    @ApiOperation({summary: 'Get test template by code'})
    @ApiTags(ConstantsApiTags.TEST_TEMPLATE)
    @Get('/:code')
    async findOne(@Res() res, @Param('code') code: string) {
        const foundTesTemplate = await this.testTemplateService.find(code) 
        if(!foundTesTemplate)
            throw new NotFoundException(`Not found TestTemplate with code ${code}`)    
        res.status(HttpStatus.OK).json(foundTesTemplate)
    }

    @ApiOperation({summary: 'Update test template'})
    @ApiResponse({status: 200, type: TestTemplateFullDTO})
    @Patch()
    @ApiTags(ConstantsApiTags.TEAM)
    async update(@Res() res, @Body() updateDTO: UpdateTestTemplateDTO) {
        const updatedTestTemplate = await this.testTemplateService.update(updateDTO)
        res.status(HttpStatus.OK).json(updatedTestTemplate).json
    }

}