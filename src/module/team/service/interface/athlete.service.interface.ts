export interface AthleteServiceInterface {
  createAthlete(
    createAthlete: CreateAthleteServiceRequest,
  ): Promise<CreateAthleteServiceResponse>;
}

export class CreateAthleteServiceResponse {
  name: string;
}

export class CreateAthleteServiceRequest {
  id: string;
  name: string;
}
