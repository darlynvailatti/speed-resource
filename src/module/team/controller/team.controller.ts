import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TeamService } from '../service/team.service';
import {
  CreateTeamRequestDto,
  CreateTeamResponseDto,
  DeleteTeamRequestDto,
  DeleteTeamResponseDto,
  GetTeamListResponseDto,
  GetTeamResponseDto,
  TAG,
  TeamApiInterface,
  TeamDto,
  UpdateTeamRequestDto,
  UpdateTeamResponseDto,
} from './api/team.api.interface';

@Controller({
  path: 'team',
})
export class TeamController implements TeamApiInterface {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @ApiOperation({ summary: 'Create new team' })
  @ApiResponse({ status: 201, type: CreateTeamResponseDto })
  @ApiTags(TAG)
  async createTeam(
    @Body() createTeamDto: CreateTeamRequestDto,
  ): Promise<CreateTeamResponseDto> {
    console.log(createTeamDto);
    return await this.teamService.createTeam(createTeamDto);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete an existing team' })
  @ApiResponse({ status: 200, type: CreateTeamResponseDto })
  @ApiTags(TAG)
  async deleteTeam(
    @Body() deleteTeam: DeleteTeamRequestDto,
  ): Promise<DeleteTeamResponseDto> {
    return await this.teamService.deleteTeam(deleteTeam);
  }

  @Put()
  @ApiOperation({ summary: 'Update an existing team' })
  @ApiResponse({ status: 200, type: UpdateTeamResponseDto })
  @ApiTags(TAG)
  async updateTeam(
    @Body() updateTeam: UpdateTeamRequestDto,
  ): Promise<UpdateTeamResponseDto> {
    return await this.teamService.updateTeam(updateTeam);
  }

  @Get()
  @ApiOperation({ summary: 'Get an existing team' })
  @ApiResponse({ status: 200, type: GetTeamResponseDto })
  @ApiTags(TAG)
  async getTeam(@Query('id') id: number): Promise<GetTeamResponseDto> {
    return await this.teamService.getTeam(id);
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get a list of teams' })
  @ApiResponse({ status: 200, type: GetTeamListResponseDto })
  @ApiTags(TAG)
  async getList(): Promise<GetTeamListResponseDto> {
    const loaded = await this.teamService.getList();
    if (loaded && loaded.items && loaded.items.length > 0) {
      const items = loaded.items.map(t => {
        return new TeamDto(t.id, t.name, t.description);
      });
      return {
        items: items,
      };
    }
  }
}
