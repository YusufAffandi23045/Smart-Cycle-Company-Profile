"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(
  prevState: any,
  formData: FormData
) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // Simulasi login — username dan password hardcoded
  if (username === "sorey" && password === "sorey123") {
    const cookieStore = await cookies();
    cookieStore.set("session", "logged-in", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 2, // 2 menit
    });
    redirect("/dashboard");
  }

  return { success: false, message: "Username atau password salah!" };
}
