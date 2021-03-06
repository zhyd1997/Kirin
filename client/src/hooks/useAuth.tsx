import React, { createContext, ReactNode, useContext, useState } from "react";

import { baseUrl } from "@/baseUrl";
import type { SignInReqBody, SignUpReqBody } from "@/types";

interface StoreType {
  token: string;
}

interface ProvideAuthInterface {
  user: string | null;
  isAuthenticated: boolean;
  token: StoreType;
  response: string;
  tips: string;
  signin: (reqBody: SignInReqBody, cb: () => void) => void;
  signup: (reqBody: SignUpReqBody, cb: () => void) => void;
  signout: (cb: () => void) => void;
}

const authContext = createContext<ProvideAuthInterface>(
  {} as ProvideAuthInterface
);

function useProvideAuth() {
  const store = JSON.parse(localStorage.getItem("login")!);

  const [user, setUser] = useState<string | null>(store?.username || null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    store !== null
  );
  const [token, setToken] = useState<StoreType>({
    token: store ? store.token : "",
  });
  const [response, setResponse] = useState<string>("");
  const [tips, setTips] = useState<string>("tips");

  const signin = (reqBody: SignInReqBody, cb: () => void) => {
    fetch(`${baseUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then((res) => {
      res.json().then((result) => {
        if (result.success === true) {
          localStorage.setItem(
            "login",
            JSON.stringify({
              token: result.token,
              username: result.username,
            })
          );
          setResponse("LogIn successfully!");
          setTips("tips success");
          setTimeout(() => setTips("tips-fade"), 3000);
          setIsAuthenticated(true);
          setToken({ token: result.token });
          setUser(result.username);
          cb();
        } else {
          setResponse(result.error);
          setTips("tips error");
          setTimeout(() => setTips("tips-fade"), 3000);
          setIsAuthenticated(false);
          setToken({ token: "" });
          setUser(null);
        }
      });
    });
  };

  const signup = (reqBody: SignUpReqBody, cb: () => void) => {
    fetch(`${baseUrl}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then((res) => {
      res.json().then((result) => {
        if (result.success === true) {
          setResponse("SignUp successfully!");
          setTips("tips success");
          setTimeout(() => setTips("tips-fade"), 3000);
          cb();
        } else {
          setResponse(result.error);
          setTips("tips error");
          setTimeout(() => setTips("tips-fade"), 3000);
        }
      });
    });
  };

  const signout = (cb: () => void) => {
    const TOKEN = `Bearer ${token.token}`;
    fetch(`${baseUrl}/api/v1/auth/logout`, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    }).then(() => {
      localStorage.removeItem("login");
      setResponse("Logout Successfully!");
      setTips("tips success");
      setTimeout(() => setTips("tips-fade"), 3000);
      setIsAuthenticated(false);
      setToken({ token: "" });
      setUser(null);
      cb();
    });
  };

  return {
    user,
    isAuthenticated,
    token,
    response,
    tips,
    signin,
    signup,
    signout,
  };
}

export const useAuth = () => useContext(authContext);

export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
