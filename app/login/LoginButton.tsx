"use client";

import { useFormStatus } from "react-dom";

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="login-btn">
      {pending ? "Masuk..." : "Login"}
    </button>
  );
}