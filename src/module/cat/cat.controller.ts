import { Controller, Get, Post, Req, HttpCode, Header } from '@nestjs/common';
import { Request } from 'express';

@Controller('cat')
export class CatController {

  @Get()
  find(@Req() request: Request): any {
    return 'cat'
  }

  @Get('hello')
  search(): any {
    let v: any = {}
    v.name = 'zhou'
    v.age = 18
    return v
  }

  @Post('create')
  @Header('Cache-Control', 'none')
  create(): void {
    console.info('post')
  }

}
