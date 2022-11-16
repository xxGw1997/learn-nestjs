import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Session, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,  //生成验证码位数
      fontSize: 50,  //文字大小
      width: 100,
      height: 34,
      background: '#cc9966'
    })
    session.code = captcha.text
    res.type('image/svg+xml')
    res.send(captcha.data)
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code);
    if (session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return {
        code: 200,
        message: "验证码正确"
      }
    } else {
      return {
        code: 200,
        message: "验证码错误"
      }
    }
  }
}
