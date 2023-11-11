import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ParamUser = {
  id: string;
  idEmpresa: string;
};

type QueryUser = {
  p: string;
  r: string;
};

type BodyUser = {
  name: string;
  age: number;
};

@Controller('/users')
export class UserController {
  @Get('/:id/:idEmpresa')
  findById(@Param() params: ParamUser) {
    return 'Usuário do ID ' + params.id + ' - Empresa ID: ' + params.idEmpresa;
  }

  @Get('/findByPages')
  findByPages(@Query() queries: QueryUser) {
    return 'Queries ' + queries.r;
  }

  @Post('/create')
  create(@Body() data: BodyUser) {
    return {
      ...data,
      id: randomUUID(),
    };
  }
}
