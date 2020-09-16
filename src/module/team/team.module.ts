import { Module } from '@nestjs/common';
import { AthleteController } from './controller/athlete.controller';
import { TeamController } from './controller/team.controller';
import { AthleteService } from './service/athlete.service';
import { TeamService } from './service/team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamRepository } from './repository/team.repository';
import { AthleteRepository } from './repository/athlete.respository';

@Module({
  imports: [TypeOrmModule.forFeature([TeamRepository, AthleteRepository])],
  providers: [AthleteService, TeamService],
  exports: [AthleteService, TeamService],
  controllers: [AthleteController, TeamController],
})
export class TeamModule {}
