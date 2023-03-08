import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { config } from '../config/AppConfig';

/**
 * http client를 초기화 한다.
 */
export const httpClient: AxiosInstance = axios.create({
  baseURL: config().apiUrl,
  responseType: 'json',
  headers: {
    'X-Env-Type': config().envCd,
    'X-Auth-Token': '',
  },
} as AxiosRequestConfig);
