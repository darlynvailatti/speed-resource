import { Module } from "@nestjs/common";
import { TestTemplateValidatorService } from "./service/validation/test-template-validator.service";
import { TestTemplateService } from "./service/test-template.service";
import { TestTemplateController } from "./controller/test-template.controller";
import { MongoModule } from "../database/mongo.module";
import { TestTemplateRepository } from "./repository/test-template-repository.service";

@Module({
    imports: [MongoModule],
    providers: [
        TestTemplateValidatorService, 
        TestTemplateService,
        TestTemplateRepository],
    controllers: [TestTemplateController]
})
export class TestTemplateModule{
    
}