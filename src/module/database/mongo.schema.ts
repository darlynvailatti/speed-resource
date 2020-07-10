import { athleteSchema } from 'src/model/team/mongo.schema/athlete.schema'
import { sequenceGeneratorSchema } from 'src/module/database/mongo.sequence.generator.schema'


export enum MongoLocalModels {
    SEQUENCE_GENERATOR = 'sequence-generator',
    ATHLETE = 'athlete'
}

export class  MongoLocalSchemas {

    public static schemas = [
        {
            name: MongoLocalModels.SEQUENCE_GENERATOR, schema: sequenceGeneratorSchema
        },
        {
            name: MongoLocalModels.ATHLETE, schema: athleteSchema
        },
        
    ]

}

