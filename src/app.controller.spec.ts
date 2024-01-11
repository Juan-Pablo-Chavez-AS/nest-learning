import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // remember mocking an import
    jest.mock('./app.service', () => ({
      __esModule: true,
      dependencyFunction: jest.fn(() => 'mockedValue'),
    }));
    // In case you want to mock something injectable you may need to create testing moudle and compile it
    /*
    // Create a testing module
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleService, AnotherService],
    }).compile();

    // Get instances of the services
    sampleService = module.get<SampleService>(SampleService);
    anotherService = module.get<AnotherService>(AnotherService);
  });

  it('should return mocked data from AnotherService', () => {
    // Mock the behavior of the getData method in AnotherService
    const mockedData = 'mockedData';
    (anotherService.getData as jest.Mock).mockReturnValue(mockedData);
    // ...
    */
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
