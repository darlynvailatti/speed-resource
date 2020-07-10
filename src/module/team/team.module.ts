import { Module } from "@nestjs/common";
import { AthleteController } from "./controller/athlete.controller";
import { TeamController } from "./controller/team.controller";
import { AthleteService } from "./service/athlete.service";
import { MongoModule } from "../database/mongo.module";
import { AthleteRepositoryService } from "./repository/athlete.respository.service";

@Module({
    imports: [MongoModule],
    providers: [
        AthleteService, 
        AthleteRepositoryService
    ],
    exports: [
        AthleteService
    ],
    controllers: [
        AthleteController, 
        TeamController
    ]
})
export class TeamModule {

}