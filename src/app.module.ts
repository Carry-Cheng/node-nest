import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// mysql module
import { Connection } from 'typeorm';
import { MySqlModule } from './mysql/mysql.module';
import { CatModule } from './module/cat/cat.module';

@Module({
  imports: [
    MySqlModule,
    CatModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
