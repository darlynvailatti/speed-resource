import { Module } from "@nestjs/common";
import { MongoLocalConfig } from "./mongo.config";
import { MongooseModule } from '@nestjs/mongoose'
import { MongoLocalSchemas } from "./mongo.schema";
import { MongoSequenceGeneratorService } from "./mongo.sequence.generator.service";

@Module({
    imports: [
      MongooseModule.forRoot(MongoLocalConfig.url, { useNewUrlParser: true, useUnifiedTopology: true}),
      MongooseModule.forFeature(MongoLocalSchemas.schemas),
    ],
    providers: [
      MongoSequenceGeneratorService,
    ],
    exports: [
      MongoSequenceGeneratorService,
    ],
  
  })
  export class MongoModule {
     
  }