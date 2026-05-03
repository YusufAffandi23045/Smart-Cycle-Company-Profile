"use server";

import { getSupabase } from "@/lib/supabase";

export async function submitContact(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const { data, error } = await getSupabase().from("contacts").insert([
    { name, email, message },
  ]);
  console.log("SUPABASE RESULT:", { data, error });

  if (error) {
    return { success: false, message: "Gagal mengirim pesan!" };
  }

  return { success: true, message: "Pesan berhasil dikirim!" };
}