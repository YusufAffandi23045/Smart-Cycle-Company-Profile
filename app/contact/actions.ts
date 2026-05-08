"use server";

import { getSupabase } from "@/lib/supabase";
import { z } from "zod";

// Schema validasi
const ContactSchema = z.object({
  name: z
    .string()
    .min(1, "Nama tidak boleh kosong")
    .min(3, "Nama minimal 3 karakter"),
  email: z
    .string()
    .min(1, "Email tidak boleh kosong")
    .email("Format email tidak valid"),
  message: z
    .string()
    .min(1, "Pesan tidak boleh kosong")
    .min(10, "Pesan minimal 10 karakter"),
});

export async function submitContact(
  prevState: any,
  formData: FormData
) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // Validasi dengan Zod
  const result = ContactSchema.safeParse(rawData);

  if (!result.success) {
    // Kembalikan error per field
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      success: false,
      message: null,
      errors: {
        name: fieldErrors.name?.[0] ?? null,
        email: fieldErrors.email?.[0] ?? null,
        message: fieldErrors.message?.[0] ?? null,
      },
    };
  }

  // Kalau valid, simpan ke Supabase
  const { error } = await getSupabase()
    .from("contacts")
    .insert([result.data]);

  if (error) {
    return {
      success: false,
      message: "Gagal mengirim pesan!",
      errors: null,
    };
  }

  return {
    success: true,
    message: "Pesan berhasil dikirim!",
    errors: null,
  };
}