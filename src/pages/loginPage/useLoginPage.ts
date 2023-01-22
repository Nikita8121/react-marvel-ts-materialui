import { useState, MouseEvent, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export type toggleLogin = "register" | "login";

const useLoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("login")) {
      setSearchParams({ login: "true" });
    }
  }, [searchParams]);

  const loginTogglerValue = useMemo((): toggleLogin => {
    return searchParams.get("login") === "true" ? "login" : "register";
  }, [searchParams]);

  const [loginToggler, setLoginToggler] =
    useState<toggleLogin>(loginTogglerValue);

  const handleTogglerChange = (
    event: MouseEvent<HTMLElement>,
    newValue: toggleLogin,
  ) => {
    setLoginToggler(newValue);
  };

  return { handleTogglerChange, loginToggler };
};

export default useLoginPage;
