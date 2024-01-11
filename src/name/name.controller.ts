import { BadRequestException, Controller, Get, Query } from '@nestjs/common';

@Controller('hello')
export class NameController {
  @Get()
  getName(@Query('name') name: string): object {
  //   if (!name) {
  //     return res.json({
  //       message: 'Please provide a name',
  //     }).status(400);
  //   }

  //   return res.json({
  //     message: `Hello ${name}`,
  //   }).status(200);
  // }
    if (!name) {
      throw new BadRequestException('Please provide a name'); // This will return a 400 error without using the res object
    }

    return {
      message: `Hello ${name}`,
    };
  }
}
