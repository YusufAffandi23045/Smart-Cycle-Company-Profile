"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import SubmitButton from "./LoginButton";

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <div className="login-wrapper">
      <div className="login-card">

        {/* Logo / Title */}
        <div className="login-header">
          <h1 className="login-title">♻️ Smart Cycle</h1>
          <p className="login-subtitle">Admin Dashboard Login</p>
        </div>

        {/* Error message */}
        {state?.message && (
          <div className="login-error">
            {state.message}
          </div>
        )}

        {/* Form */}
        <form action={formAction} className="login-form">
          <div className="login-field">
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Masukkan username"
              className="login-input"
              autoComplete="username"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Masukkan password"
              className="login-input"
              autoComplete="current-password"
            />
          </div>

          <SubmitButton />
        </form>

      </div>
    </div>
  );
}