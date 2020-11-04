import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTemplateController } from './controller/test-template.controller';
import { TestController } from './controller/test.controller';
import { TestTemplateRepository } from './repository/test-template.repository';
import { TestRepository } from './repository/test.repository';
import { CreateTestTemplateProcessor } from './service/processor/create-test-template.processor';
import { CreateTestProcessor } from './service/processor/create-test.processor';
import { UpdateTestTemplateProcessor } from './service/processor/update-test-template.processor';
import { TestTemplateService } from './service/test-template.service';
import { TestService } from './service/test.service';
import { TestTemplateValidatorService } from './service/processor/test-template-validator.processor';
import { GetTestListProcessor } from './service/processor/get-test-list.procesor';
import { PutExecutionProcessor } from './service/processor/put-execution.processor';
@Module({
  imports: [TypeOrmModule.forFeature([TestTemplateRepository, TestRepository])],
  providers: [
    //Services
    TestService,
    TestTemplateService,
    TestTemplateValidatorService,

    //Processors
    CreateTestProcessor,
    CreateTestTemplateProcessor,
    UpdateTestTemplateProcessor,
    GetTestListProcessor,
    PutExecutionProcessor,

    //Custom Providers
  ],
  controllers: [TestController, TestTemplateController],
})
export class TestModule {}
