import { Controller, Get, HttpCode, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('controller') // controller path, prefixed to every function route
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test/:id')
  @HttpCode(999) // Has priority over the status code in the res object
  getAnotherOne(@Query('a') queryParam: string, @Param('id') pathParam: string, @Res() res: Response, @Req() req: Request): object {
    console.log(req.body);
    return res.json({
      name: 'dwadwa',
      message: 'testing watchmode',
      queryParam,
      pathParam,
    }).status(501);

    /* If you ask for res param, you gotta use res param like in express(Just an object return no longer works) */

  //   return {
  //     name: 'dwadwa',
  //     message: 'testing watchmode',
  //     queryParam,
  //     pathParam,
  //   };
  }
}
