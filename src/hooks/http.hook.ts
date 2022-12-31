import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (
      url: string,
      params?: object,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" },
    ) => {
      setLoading(true);

      try {
        const config: AxiosRequestConfig = {
          method,
          params,
          url,
          data: body,
          headers,
        };
        const response: AxiosResponse = await axios(config);

        const { data } = response;

        setLoading(false);
        return data;
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    [],
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

export default useHttp;
