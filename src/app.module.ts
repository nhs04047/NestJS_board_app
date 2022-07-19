import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMconfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMconfig), BoardsModule, AuthModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
