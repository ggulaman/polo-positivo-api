import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';

@Injectable()
export class PvgisService {
  async fetchPVGISData(dynamicQuery: string): Promise<any> {
    //const url = `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?${JSON.stringify(dynamicQuery)}`;
    const url = `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc`;
    console.log(`the url is: ${url}`)

    try {
      const response = await axios.get(url, { params: dynamicQuery });

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError; // Cast error to AxiosError
      const errorMessage =
        axiosError.message || 'Unknown error occurred';
      throw new Error(`Error fetching data from PVGIS API: ${errorMessage}`);
    }

  }
}