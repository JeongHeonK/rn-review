import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseError = AxiosError<{
  statusCode: string;
  message: string;
  error: string;
}>;

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  "mutationFn"
>;

type UseQueryCustomOptions<
  TQueryFnData = unknown,
  TouchData = TQueryFnData,
> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TouchData, QueryKey>,
  "queryKey"
>;

export type { ResponseError, UseMutationCustomOptions, UseQueryCustomOptions };
