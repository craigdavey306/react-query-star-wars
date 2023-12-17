import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '../constants';
import { SwapiApiName } from '../models/types';

export interface SwapiApiService {
  apiName: SwapiApiName;
  url: string;
  config?: AxiosRequestConfig;
  page?: number;
}

export interface SwapiApiResult<T> {
  results: T[];
  next: string;
  count: number;
}

export const GetSwapiData = async <T>({
  url,
  apiName,
  config,
  page,
}: SwapiApiService) => {
  if (!config) {
    config = { timeout: 10000 };
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/${url}/${page ? `?page=${page}` : ''}`,
      config
    );
    return response.data as T;
  } catch (error) {
    throw Error(`Unable to fetch ${apiName} API.`);
  }
};
