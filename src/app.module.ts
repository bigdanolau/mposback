import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingService } from './parking/parking.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ParkingService],
})
export class AppModule {}
