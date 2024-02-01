import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { isValid, parseISO } from 'date-fns';
import { ReeService } from './ree.service';
import { raise400 } from '@common';

@Controller('ree')
export class ReeController {
  constructor(private readonly reeService: ReeService) { }


  @Get()
  async getDetailsBetweenDates(
    @Query('start_date') start_date: string,
    @Query('end_date') end_date: string,
  ): Promise<any> {

    // move the following to the server
    if (!start_date || !end_date) raise400('Please provide both start_date and end_date in the query parameters.');

    if (!isValid(parseISO(start_date))) raise400('Invalid start_date. Please provide a valid date.');

    if (!isValid(parseISO(end_date))) raise400('Invalid end_date. Please provide a valid date.');


    return this.reeService.fetchREEMarketPriceData(start_date, end_date);
  }
}
