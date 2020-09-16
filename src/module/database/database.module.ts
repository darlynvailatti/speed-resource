import { Module } from '@nestjs/common';
import { configService } from 'src/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  providers: [],
  exports: [TypeOrmModule],
  controllers: [],
})
export class DatabaseModule {}
