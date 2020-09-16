export interface TeamServiceInterface {
  createTeam(
    createTeam: CreateTeamServiceRequest,
  ): Promise<CreateTeamServiceResponse>;

  deleteTeam(
    deleteTeam: DeleteTeamServiceRequest,
  ): Promise<DeleteTeamServiceResponse>;

  updateTeam(
    updateTeam: UpdateTeamServiceRequest,
  ): Promise<UpdateTeamServiceResponse>;

  getTeam(id: number): Promise<GetTeamServiceResponse>;

  getList(): Promise<GetTeamListServiceRespose>;
}

export class CreateTeamServiceRequest {
  name: string;
  description: string;
}

export class CreateTeamServiceResponse {
  id: number;
  name: string;
  description: string;
}

export class DeleteTeamServiceRequest {
  id: number;
}

export class DeleteTeamServiceResponse {
  id: number;
}

export class UpdateTeamServiceRequest {
  id: number;
  description: string;
}

export class UpdateTeamServiceResponse {
  id: number;
  name: string;
  description: string;
}

export class GetTeamServiceResponse {
  id: number;
  name: string;
  description: string;
}

export class TeamDto {
  id: number;
  name: string;
  description: string;
}

export class GetTeamListServiceRespose {
  items: Array<TeamDto>;
}
