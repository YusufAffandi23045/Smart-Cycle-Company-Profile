"use server";

import { getSupabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteContact(formData: FormData) {
  const id = formData.get("id") as string;

  await getSupabase().from("contacts").delete().eq("id", id);

  revalidatePath("/dashboard");
}