import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAccessToken,
  getProfile,
  logout,
  postLogin,
  postSignup,
  queryClient,
  ResponseToken,
} from "../../api";
import {
  UseMutationCustomOptions,
  UseQueryCustomOptions,
} from "../../types/common";
import {
  setHeader,
  removeHeader,
  setEncryptStorage,
  removeEncryptStorage,
} from "@/util";
import { useEffect } from "react";

function useSignup(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
}

function useLogin(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ accessToken, refreshToken }: ResponseToken) => {
      setEncryptStorage("refreshToken", refreshToken);
      setHeader("Authorization", `Bearer ${accessToken}`);
    },
    onSettled: () => {
      queryClient.refetchQueries({ queryKey: ["auth", "getAccessToken"] });
      queryClient.invalidateQueries({ queryKey: ["auth", "getProfile"] });
    },
    ...mutationOptions,
  });
}

function useLogout(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeEncryptStorage("refreshToken");
      removeHeader("Authorization");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    ...mutationOptions,
  });
}

function useGetRefreshToken() {
  const { isSuccess, data, isError } = useQuery({
    queryKey: ["auth", "getAccessToken"],
    queryFn: getAccessToken,
    staleTime: 27 * 60 * 1000,
    refetchInterval: 27 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader("Authorization", `Bearer ${data.accessToken}`);
      setEncryptStorage("refreshToken", data.refreshToken);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      removeEncryptStorage("refreshToken");
      removeHeader("Authorization");
    }
  }, [isError]);

  return { isSuccess, isError };
}

function useGetProfile(queryOptions?: UseQueryCustomOptions) {
  return useQuery({
    queryKey: ["auth", "getProfile"],
    queryFn: getProfile,
    ...queryOptions,
  });
}

function useAuth() {
  const signupMutation = useSignup();
  const refreshTokenQuery = useGetRefreshToken();
  const getProfileQuery = useGetProfile({
    enabled: refreshTokenQuery.isSuccess,
  });

  const isLogin = getProfileQuery.isSuccess;
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  return {
    signupMutation,
    refreshTokenQuery,
    isLogin,
    loginMutation,
    logoutMutation,
  };
}

export default useAuth;
