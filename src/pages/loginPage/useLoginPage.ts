import { useState, MouseEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export type toggleLogin = "register" | "login";

const useLoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loginToggler, setLoginToggler] = useState<toggleLogin>("login");

  const setLoginQuery = (value: boolean) => {
    setSearchParams({ login: value.toString() });
  };

  useEffect(() => {
    const queryValue = searchParams.get("login");
    if (!queryValue) {
      setLoginQuery(true);
    } else {
      setLoginToggler(queryValue === "true" ? "login" : "register");
    }
  }, [searchParams]);

  const handleTogglerChange = (
    event: MouseEvent<HTMLElement>,
    newValue: toggleLogin,
  ) => {
    setLoginQuery(newValue === "login");
  };

  return { handleTogglerChange, loginToggler, setLoginQuery };
};

export default useLoginPage;
