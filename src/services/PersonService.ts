import { GetSwapiData, SwapiApiResult } from './SwapiService';
import { Person } from '../models/interfaces';

export const PersonApiService = (page: number) => {
  return GetSwapiData<SwapiApiResult<Person>>({
    apiName: 'people',
    url: 'people',
    page,
  });
};
