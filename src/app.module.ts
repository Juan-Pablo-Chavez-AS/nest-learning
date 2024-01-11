import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NameController } from './name/name.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, NameController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/', '/hello') // using '*' messes up with the url attribute in the req object in the logger middleware
      // Also, if you add something futher than '/' the url attribute will act weird in the middleware too
      // .forRoutes(AppController, NameController); // applied to all routes in these controllers

    // You can also use .exclude() to exclude some routes from the middleware in case it matches with something you don't want it there
    // You can call again separately consumer.apply() multiple times to apply multiple middlewares differently
  }
}
