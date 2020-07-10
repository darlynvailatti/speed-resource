import { Controller, Get, Post, Body } from "@nestjs/common";
import { AthleteService } from "../service/athlete.service";
import { Athlete } from "src/model/team/athlete";
import { CreateAthleteDTO, CreateAthleteResponseDTO } from "./dto/create-athlete.dto";
import { ApiOperation, ApiTags, ApiResponse } from "@nestjs/swagger";
import { ConstantsApiTags } from "src/constants/constants";

@Controller({
    path: "athlete"
})
export class AthleteController {

    constructor(private athleteService: AthleteService){
    }


    @Get()
    getAthlete() : any{
        return "";
    }

    @ApiOperation({summary: 'Create new athlete'})
    @ApiTags(ConstantsApiTags.TEAM)
    @ApiResponse({status: 201, type: CreateAthleteResponseDTO})
    @Post()
    async createAthlete(@Body() createAthleteDto: CreateAthleteDTO): Promise<CreateAthleteResponseDTO> {
        const newAthlete : Athlete = await this.athleteService.createAthlete(createAthleteDto)
        const createAthleteResponseDTO : CreateAthleteResponseDTO = {
            code: newAthlete.code,
            name: newAthlete.name
        }
        return createAthleteResponseDTO
    }
    
}