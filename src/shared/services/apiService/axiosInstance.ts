import axios, { AxiosHeaders } from "axios";
import { getAuthToken } from "../../utils/authTokenUtils";

const axiosClient = axios.create();

const { REACT_APP_API_BASE } = process.env;
const _apiBase = REACT_APP_API_BASE;

// Replace this with our own backend base URL
axiosClient.defaults.baseURL = _apiBase;

axiosClient.defaults.headers.common["Content-Type"] = "application/json";
axiosClient.defaults.headers.common.Accept = "application/json";

// Adding Authorization header for all requests

axiosClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      // Configure this as per your backend requirements
      // eslint-disable-next-line no-param-reassign
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosClient;
