import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'uni_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    })
  ]
})
export class MySqlModule {}
