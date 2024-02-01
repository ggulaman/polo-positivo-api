import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';

@Injectable()
export class ReeService {
  async fetchREEMarketPriceData(startDate: string, endDate: string): Promise<any> {
    const url = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${startDate}&end_date=${endDate}&time_trunc=hour`;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError; // Cast error to AxiosError
      const errorMessage =
        axiosError.message || 'Unknown error occurred';
      throw new Error(`Error fetching data from REE API: ${errorMessage}`);
    }

  }
}