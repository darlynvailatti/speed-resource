import { ApiProperty } from '@nestjs/swagger';

export const TAG = 'team';

export interface TeamApiInterface {
  createTeam(
    createTeamDto: CreateTeamRequestDto,
  ): Promise<CreateTeamResponseDto>;

  deleteTeam(deleteTeam: DeleteTeamRequestDto): Promise<DeleteTeamResponseDto>;

  updateTeam(updateTeam: UpdateTeamRequestDto): Promise<UpdateTeamResponseDto>;

  getTeam(id: number): Promise<GetTeamResponseDto>;

  getList(): Promise<GetTeamListResponseDto>;
}

export class TeamDto {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class CreateTeamRequestDto {
  @ApiProperty({ required: true }) name: string;
  @ApiProperty({ required: true }) description: string;
}

export class CreateTeamResponseDto {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
}

export class DeleteTeamRequestDto {
  @ApiProperty({ required: true }) id: number;
}

export class DeleteTeamResponseDto {
  @ApiProperty() id: number;
}

export class UpdateTeamRequestDto {
  @ApiProperty({ required: true }) id: number;
  @ApiProperty({ required: true }) description: string;
}

export class UpdateTeamResponseDto {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
}

export class GetTeamResponseDto {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
}

export class GetTeamListResponseDto {
  @ApiProperty({ type: [TeamDto] }) items: TeamDto[];
}
