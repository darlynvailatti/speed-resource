import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTemplateController } from './controller/test-template.controller';
import { TestController } from './controller/test.controller';
import { TestTemplateRepository } from './repository/test-template.repository';
import { TestTemplateService } from './service/test-template.service';
import { TestTemplateValidatorService } from './service/validation/test-template-validator.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestTemplateRepository])],
  providers: [TestTemplateService, TestTemplateValidatorService],
  controllers: [TestController, TestTemplateController],
})
export class TestModule {}
