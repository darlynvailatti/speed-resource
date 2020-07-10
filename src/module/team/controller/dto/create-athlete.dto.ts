import { ApiProperty } from "@nestjs/swagger"

export class CreateAthleteDTO {
    
    @ApiProperty({required: true})
    name: string
}

export class CreateAthleteResponseDTO {

    @ApiProperty()
    code: string

    @ApiProperty()
    name: string
}