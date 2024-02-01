import { Controller, Get, Query } from '@nestjs/common';
import { PvgisService } from './pvgis.service';

@Controller('pvgis')
export class PvgisController {
  constructor(private readonly pvgisService: PvgisService) { }


  @Get()
  async getPVGISData(@Query() dynamicQuery: any): Promise<any> {
    return this.pvgisService.fetchPVGISData(dynamicQuery);
  }
}

