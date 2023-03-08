/* eslint-disable prettier/prettier */
/* eslint-disable comma-spacing */
import { MutationFunction, MutationKey, QueryFunction, QueryKey, useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig, HttpStatusCode } from 'axios';
import { httpClient } from './ApiConfig';

// <T> 선언 https://github.com/typescript-eslint/typescript-eslint/issues/4062
export interface IError<T> extends AxiosError<T, any> {
  readonly code: string;
  readonly message: string;
  msgArgs?: Array<string> | Array<number>;
}

export const findAll = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.get<T | T[]>(url, { ...config });
  return response.data;
};

export const find = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.get<T | T[]>(url, { ...config });
  return response.data;
};

export const post = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.post<T | T[]>(url, { ...config });
  return response.data;
};

export const put = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.put<T | T[]>(url, { ...config });
  return response.data;
};

export const patch = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.patch<T | T[]>(url, { ...config });
  return response.data;
};

export const remove = async <T,>(url: string, config?: AxiosRequestConfig<T>) => {
  const response = await httpClient.delete<T | T[]>(url, { ...config });
  return response.data;
};

export const useWrapQuery = <
  TQueryFnData = unknown,
  TError extends IError<TQueryFnData> = IError<TQueryFnData> & unknown,
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
      console.error(`[HTTP Code] ${errResponse.code}`);
      console.error(`[HTTP Error] ${errResponse.message}`);
      console.error(`[HTTP Stack] ${error.stack}`);
    },
  });

  return query;
};

export const useWrapMuation = <
  TData = unknown,
  TError extends IError<TData> = IError<TData> & unknown,
  TVariables = void,
  TContext = unknown,
  TMutationKey extends MutationKey = MutationKey,
>(
  mutationKey: TMutationKey,
  mutationFn?: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const muation = useMutation<TData, TError, TVariables, TContext>(mutationKey, mutationFn, {
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
      console.error(`[HTTP Code] ${errResponse.code}`);
      console.error(`[HTTP Error] ${errResponse.message}`);
      console.error(`[HTTP Stack] ${error.stack}`);
    },
  });

  return muation;
};
