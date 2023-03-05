/* eslint-disable prettier/prettier */
/* eslint-disable comma-spacing */
import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig, HttpStatusCode } from 'axios';
import { httpClient } from './ApiConfig';

// <T> 선언 https://github.com/typescript-eslint/typescript-eslint/issues/4062

const apiService = {
  get: async <T,>(url: string, params?: any): Promise<T> => {
    try {
      return (await httpClient.get(url, { params })).data.data;
    } catch (error: any) {
      throw Promise.reject(handleError(error));
    }
  },
  post: async <T,>(url: string, data?: any, params?: any): Promise<T> => {
    try {
      return (await httpClient.post(url, data, { params })).data.data;
    } catch (error: any) {
      throw Promise.reject(handleError(error));
    }
  },
  put: async <T,>(url: string, data?: any, params?: any): Promise<T> => {
    try {
      return (await httpClient.put(url, data, { params })).data.data;
    } catch (error: any) {
      throw Promise.reject(handleError(error));
    }
  },
  patch: async <T,>(url: string, data?: any, params?: any): Promise<T> => {
    try {
      return (await httpClient.patch(url, data, { params })).data.data;
    } catch (error: any) {
      throw Promise.reject(handleError(error));
    }
  },
  delete: async <T,>(url: string, params?: any): Promise<T> => {
    try {
      return (await httpClient.delete(url, { params })).data.data;
    } catch (error: any) {
      throw Promise.reject(handleError(error));
    }
  },
};

export interface MmtError<T> extends AxiosError<T, any> {
  readonly code: string;
  readonly message: string;
  msgArgs?: Array<string> | Array<number>;
}

export const findAll = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.get<T | T[]>(url, { ...config });
  return response.data;
};

export const useGetQuery = <
  TQueryFnData = unknown,
  TError extends MmtError<TQueryFnData> = MmtError<TQueryFnData> & unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
): UseQueryResult<TData, TError> => {
  const query = useQuery<TQueryFnData, TError, TData, TQueryKey>(queryKey, queryFn, {
    ...options,
    onError: (error: TError) => {
      let errResponse: any;
      if (error.status === HttpStatusCode.NotFound) {
        errResponse = {
          status: error.status ?? HttpStatusCode.NotFound,
          code: error.code,
          message: '서버로부터 응답이 없습니다. 관리자에게 문의하여 주시기 바랍니다.',
        };
      } else {
        errResponse = {
          code: error.code,
          status: error.status ? error.status : error.message ?? error,
          error: error,
          message: error.message
            ? error.message.replace('\n', '<br />')
            : error.message
            ? error.message.replace('\n', '<br />')
            : `${error}(${error.status})`,
        };
      }
      console.error(`[HTTP Error] ${error.message}`);
      console.error(`[HTTP Stack] ${error.stack}`);
    },
  });

  return query;
};

/**
 * 에러핸들러
 * @param error 에러
 */
const handleError = <TError = MmtError<any> & unknown,>(error: TError): any => {
  let errResponse: any;

  return errResponse;
};

export { apiService };
