import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { AthleteRepositoryService } from "../repository/athlete.respository.service";
import { Athlete } from "src/model/team/athlete";
import { CreateAthleteDTO as CreateAthleteDTO } from "../controller/dto/create-athlete.dto";
import { EnsureThat } from "src/common/validate";
import { create } from "domain";


@Injectable()
export class AthleteService {

    constructor(private athleteRepositoryService: AthleteRepositoryService){

    }

    async createAthlete(createAthleteDTO: CreateAthleteDTO): Promise<Athlete>{

        try {
            EnsureThat.isNotEmptyString(createAthleteDTO.name, `Name of athlete can't be empty`)        
            const newAthlete : Athlete= {
                name: createAthleteDTO.name 
            }
            return await this.athleteRepositoryService.create(newAthlete)    
        } catch (error) {
            throw new InternalServerErrorException(`Error on create new athlete: ${error.message}`)
        }
    }


}