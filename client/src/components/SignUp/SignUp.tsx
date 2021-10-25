import React from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "@/hooks";
import { SignUpReqBody } from "@/types";

export const SignUp = () => {
  const auth = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<SignUpReqBody>();

  function handleSignUp(reqBody: SignUpReqBody): void {
    auth.signup(reqBody);
    if (errors.username || errors.email || errors.password) {
      clearErrors();
    }
  }

  return (
    <div className="modal-body">
      <form>
        <label htmlFor="usernameForSignup">username</label>
        <input
          type="text"
          id="usernameForSignup"
          {...register("username", { required: true })}
        />
        {errors.username && <p>Username is required!</p>}
        <label htmlFor="emailForSignup">email</label>
        <input
          type="email"
          id="emailForSignup"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Email is required!</p>}
        <label htmlFor="passwordForSignup">password</label>
        <input
          type="password"
          id="passwordForSignup"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password is required!</p>}
      </form>
      <button type="button" onClick={handleSubmit(handleSignUp)}>
        SignUp
      </button>
    </div>
  );
};