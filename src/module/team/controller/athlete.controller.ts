import { Controller, Get } from '@nestjs/common';
import { AthleteService } from '../service/athlete.service';

@Controller({
  path: 'athlete',
})
export class AthleteController {
  constructor(private athleteService: AthleteService) {}
}
