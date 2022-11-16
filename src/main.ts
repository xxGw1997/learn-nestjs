import { NestFactory } from '@nestjs/core';
import { VersioningType } from "@nestjs/common"
import { AppModule } from './app.module';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  })
  /**
   * secret: 盐
   * rolling: 每次请求重新计算session
   * name: 
   */
  app.use(session({ secret: "xxgw", rolling: true, name: "xxgw.sid", cookie: { maxAge: 99999999 } }))
  await app.listen(3000);
}
bootstrap();
