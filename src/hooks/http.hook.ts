import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<boolean | null>(null);

  const request = useCallback(
    async (
      url: string,
      params? : Object,
      method: string = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);

      try {
        const config : AxiosRequestConfig = { method, params, url, data:body, headers }
        const response : AxiosResponse = await axios(config);

        const data = response.data;

        setLoading(false);
        return data;
      } catch (e : any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};