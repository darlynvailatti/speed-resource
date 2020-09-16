import { EntityRepository, Repository } from 'typeorm';
import { Team } from '../model/team.entity';
import {
  CreateTeamServiceRequest,
  CreateTeamServiceResponse,
} from '../service/interface/team.service.interface';

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> {
  async findByName(name: string): Promise<Team> {
    return await this.createQueryBuilder('team')
      .where('team.name = :name ', { name: name })
      .getOne();
  }

  async createTeam(
    createTeamServiceRequest: CreateTeamServiceRequest,
  ): Promise<CreateTeamServiceResponse> {
    const description = createTeamServiceRequest.description;
    const name = createTeamServiceRequest.name;

    const newTeamModel = {
      name: name,
      description: description,
    };

    const createdTeamModel = await this.save(newTeamModel);

    return {
      id: createdTeamModel.id,
      name: createdTeamModel.name,
      description: createdTeamModel.description,
    };
  }
}
