import { Injectable, NotFoundException } from '@nestjs/common';
import { BussinesException } from 'src/common/exceptions';
import { TeamBusinessExceptions } from 'src/constants/exception.maps';
import { TeamRepository } from '../repository/team.repository';
import {
  CreateTeamServiceRequest,
  CreateTeamServiceResponse,
  DeleteTeamServiceRequest,
  DeleteTeamServiceResponse,
  GetTeamListServiceRespose,
  GetTeamServiceResponse,
  TeamServiceInterface,
  UpdateTeamServiceRequest,
  UpdateTeamServiceResponse,
} from './interface/team.service.interface';

@Injectable()
export class TeamService implements TeamServiceInterface {
  constructor(private teamRepository: TeamRepository) {}

  async createTeam(
    createTeamDto: CreateTeamServiceRequest,
  ): Promise<CreateTeamServiceResponse> {
    const name = createTeamDto.name;
    const existingTeam = await this.teamRepository.findByName(name);

    if (existingTeam) {
      const exceptionMessage = `Team with name '${name}' already exist`;
      throw new BussinesException(
        TeamBusinessExceptions.TEAM_WITH_NAME_ALREADY_EXIST,
      );
    }

    const createdTeam = await this.teamRepository.createTeam(createTeamDto);

    return {
      id: createdTeam.id,
      name: createdTeam.name,
      description: createdTeam.description,
    };
  }

  async deleteTeam(
    deleteTeam: DeleteTeamServiceRequest,
  ): Promise<DeleteTeamServiceResponse> {
    const id = deleteTeam.id;
    await this.teamRepository.delete(id);
    return {
      id: id,
    };
  }

  async updateTeam(
    updateTeam: UpdateTeamServiceRequest,
  ): Promise<UpdateTeamServiceResponse> {
    const existingTeam = await this.teamRepository.findOne(updateTeam.id);
    existingTeam.description = updateTeam.description;
    return await this.teamRepository.save(existingTeam);
  }

  async getTeam(id: number): Promise<GetTeamServiceResponse> {
    console.log(id);
    const existing = await this.teamRepository.findOne(id);
    return {
      id: existing.id,
      name: existing.name,
      description: existing.description,
    };
  }

  async getList(): Promise<GetTeamListServiceRespose> {
    const loaded = await this.teamRepository.find();
    const convertedToDtos = loaded.map(t => {
      return {
        id: t.id,
        name: t.name,
        description: t.description,
      };
    });
    return {
      items: convertedToDtos,
    };
  }
}
