import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Athlete } from '../model/athlete.entity';

@EntityRepository(Athlete)
export class AthleteRepository extends Repository<Athlete> {}
