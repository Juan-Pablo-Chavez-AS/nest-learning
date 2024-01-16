import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Loggin just for the app controller');
    next();
  }
}
