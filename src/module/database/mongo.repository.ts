import { Injectable } from "@nestjs/common";
import { MongoSequenceGeneratorService } from "./mongo.sequence.generator.service";

export class MongoRepository {
    constructor(protected sequenceGeneratorService: MongoSequenceGeneratorService){

    }
}