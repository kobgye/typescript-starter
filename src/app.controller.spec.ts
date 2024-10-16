import { Test, TestingModule } from '@nestjs/testing';
import { NewController,InfoController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [NewController,InfoController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(NewController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
