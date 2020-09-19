import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database/database.module';
import { TeamModule } from './module/team/team.module';
import { TestModule } from './module/test/test.module';

@Module({
  imports: [DatabaseModule, TeamModule, TestModule],
})
export class AppModule {}
