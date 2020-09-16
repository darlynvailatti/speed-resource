import { Athlete } from './athlete.entity';
import { Group } from './group.entity';

export interface AthleteGroupRelationship {
  startDate: Date;
  endDate: Date;
  athlete: Athlete;
  group: Group;
}
