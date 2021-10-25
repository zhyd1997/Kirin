import React from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";
import { SignInReqBody } from "@/types";

export const SignIn = () => {
  const auth = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<SignInReqBody>();

  function handleLogIn(reqBody: SignInReqBody): void {
    auth.signin(reqBody);
    if (errors.email || errors.password) {
      clearErrors();
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="emailForSignin">email</label>
        <input
          type="email"
          id="emailForSignin"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Email is required!</p>}
        <label htmlFor="passwordForSignin">password</label>
        <input
          type="password"
          id="passwordForSignin"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password is required!</p>}
      </form>
      <button type="button" onClick={handleSubmit(handleLogIn)}>
        SignIn
      </button>
    </div>
  );
};
