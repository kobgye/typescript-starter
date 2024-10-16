import { Module } from '@nestjs/common';
import { NewController,InfoController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [NewController, InfoController],
  providers: [AppService],
})
export class AppModule {}
