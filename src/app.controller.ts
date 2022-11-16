import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject('xxgw') private readonly appService: AppService,
    @Inject('test') private readonly shop: string[],
    @Inject('factory') private readonly factory: number) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('shop')
  getShop(): string[] {
    return this.shop
  }
  
  @Get('factory')
  getFactory(): number {
    return this.factory
  }

}
