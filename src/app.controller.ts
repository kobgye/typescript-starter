import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('new')
export class NewController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  newInfo(): string {
    return this.appService.getInfo();
  }
}

@Controller('info')
export class InfoController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  newInfo(): string {
    return this.appService.getInfo();
  }
}
