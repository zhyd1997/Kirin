import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import type { SignUpReqBody } from "@/types";

export const Register = () => {
  const [pwd2, setPwd2] = useState<string>("");
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const auth = useAuth();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPwd2(evt.target.value);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<SignUpReqBody>();

  function handleSignUp(reqBody: SignUpReqBody): void {
    if (reqBody.password !== pwd2) {
      setError("Passwords do not match");
      return;
    }
    auth.signup(reqBody, () => {
      history.replace("/login");
    });
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
          {...register("email", {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.email?.type === "required" && <p>Email is required!</p>}
        {errors.email?.type === "pattern" && <p>Invalid Email Address</p>}
        <label htmlFor="passwordForSignup">password</label>
        <input
          type="password"
          id="passwordForSignup"
          placeholder="min length is 8"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password?.type === "required" && <p>Password is required!</p>}
        {errors.password?.type === "minLength" && <p>Password is too short!</p>}
        <label htmlFor="password2ForSignup">type password again</label>
        <input
          type="password"
          id="password2ForSignup"
          value={pwd2}
          onChange={onChange}
        />
        {error && <p>{error}</p>}
      </form>
      <button type="button" onClick={handleSubmit(handleSignUp)}>
        SignUp
      </button>
    </div>
  );
};
