import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Path:', req.url);
    console.log('Method:', req.method);
    console.log('Body:', req.body);
    console.log('Query:', req.query);
    next();
  }
}
