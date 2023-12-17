import { GetSwapiData, SwapiApiResult } from './SwapiService';
import { Planet } from '../models/interfaces';

export const PlanetApiService = (page: number) => {
  return GetSwapiData<SwapiApiResult<Planet>>({
    apiName: 'planets',
    url: 'planets',
    page,
  });
};
