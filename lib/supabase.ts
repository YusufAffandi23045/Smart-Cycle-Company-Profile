import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("URL:", supabaseUrl)

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase ENV belum diset!");
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}