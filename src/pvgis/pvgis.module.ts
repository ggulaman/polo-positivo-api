import { Module } from '@nestjs/common';
import { PvgisService } from './pvgis.service';
import { PvgisController } from './pvgis.controller';

@Module({
  providers: [PvgisService],
  controllers: [PvgisController]
})
export class PvgisModule {}
