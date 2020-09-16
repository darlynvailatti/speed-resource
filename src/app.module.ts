import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database/database.module';
import { TeamModule } from './module/team/team.module';

@Module({
  imports: [DatabaseModule, TeamModule],
})
export class AppModule {}
