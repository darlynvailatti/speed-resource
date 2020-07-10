import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AthleteDocument } from "src/model/team/mongo.schema/athlete.document";
import { Athlete } from "src/model/team/athlete";
import { MongoLocalModels } from "src/module/database/mongo.schema";
import { MongoRepository } from "src/module/database/mongo.repository";
import { MongoSequenceGeneratorService } from "src/module/database/mongo.sequence.generator.service";


@Injectable()
export class AthleteRepositoryService extends MongoRepository {

    constructor(

        @InjectModel(MongoLocalModels.ATHLETE) 
        private readonly athleteModel: Model<AthleteDocument>,
        readonly sequenceGeneratorService: MongoSequenceGeneratorService
        ){
        super(sequenceGeneratorService)
    }

    public async create(athlete: Athlete): Promise<Athlete> {
        const code = await this.sequenceGeneratorService.getNextAndSave(MongoLocalModels.ATHLETE)
        athlete.code = code
        const result = await this.athleteModel.create(athlete)
        return result.toObject()
    }

}