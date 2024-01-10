import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="color: red; font-size: 48px;">Hello World!</h1>';
  }
}
