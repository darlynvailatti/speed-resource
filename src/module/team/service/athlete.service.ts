import { Injectable } from '@nestjs/common';
import { AthleteRepository } from '../repository/athlete.respository';
import {
  AthleteServiceInterface,
  CreateAthleteServiceRequest,
  CreateAthleteServiceResponse,
} from './interface/athlete.service.interface';

@Injectable()
export class AthleteService implements AthleteServiceInterface {
  constructor(private readonly athleteRepository: AthleteRepository) {}

  createAthlete(
    createAthlete: CreateAthleteServiceRequest,
  ): Promise<CreateAthleteServiceResponse> {
    throw new Error('Method not implemented.');
  }
}
