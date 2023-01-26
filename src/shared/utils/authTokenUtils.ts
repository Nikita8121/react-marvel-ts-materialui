const fieldName = "access-token";

const getAuthToken = () => {
  return localStorage.getItem(fieldName);
};

const setAuthToken = (value: string) => {
  localStorage.setItem(fieldName, value);
};

const clearAuthToken = () => {
  localStorage.removeItem(fieldName);
};

export { getAuthToken, setAuthToken, clearAuthToken };
