import { Injectable, InternalServerErrorException, Logger, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MongoLocalModels, MongoLocalSchemas } from "./mongo.schema";
import { Model } from "mongoose";
import { SequenceGeneratorDocument } from "./mongo.sequence.generator.schema";


@Injectable()
export class MongoSequenceGeneratorService implements OnApplicationBootstrap {

    private readonly logger = new Logger(MongoSequenceGeneratorService.name)
    
    constructor(
        
        @InjectModel(MongoLocalModels.SEQUENCE_GENERATOR )
        private readonly sequenceGeneratorModel : Model<SequenceGeneratorDocument>
        ){

    }

    
    onApplicationBootstrap() {
        this.createDefaultSequences()
    }

    private createDefaultSequences() {
        this.logger.log('Creating sequences...')

        MongoLocalSchemas.schemas.forEach(async (schema) => {
            const filter = { collectionName: schema.name }
            const foundSequence = await this.sequenceGeneratorModel.find(filter).exec()
            if (foundSequence.length === 0)
                this.sequenceGeneratorModel.create(
                    {
                        collectionName: schema.name,
                        counting: 0,
                    }
                )
        })

    }


    public async getNextAndSave(collectionName: string) {
        try {
            const filter = { collectionName: collectionName }
            const update = { $inc: { counting: 1 } }
            const found = await this.sequenceGeneratorModel.findOneAndUpdate(filter, update, { new: true, }).exec()
            return found.counting
        } catch (error) {
            throw new InternalServerErrorException(`Error on get next sequence for ${collectionName}: ${error}`)
        }
    }


}