import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService2, {
    provide: "xxgw",
    useClass: AppService
  }, {
      provide: 'test',
      useValue: ['TB', 'PDD', 'JD']
    }, {
      provide: 'factory',
      inject: [AppService2],
      useFactory(AppService2: AppService2) {
        console.log(AppService2.getHello());
        return 123
      }
    }],
})
export class AppModule { }
