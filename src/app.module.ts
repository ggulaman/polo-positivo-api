import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReeModule } from './ree/ree.module';
import { PvgisModule } from './pvgis/pvgis.module';

@Module({
  imports: [ReeModule, PvgisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
