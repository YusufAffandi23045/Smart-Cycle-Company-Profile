import { getSupabase } from "@/lib/supabase";
import SearchBar from "./SearchBar";
import ContactTable from "./ContactTable";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  let supabaseQuery = getSupabase()
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (query) {
    supabaseQuery = supabaseQuery.or(
      `name.ilike.%${query}%,email.ilike.%${query}%`
    );
  }

  const { data: contacts, error } = await supabaseQuery;

  return (
    <div className="dashboard-wrapper">

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">📋 Dashboard Admin</h1>
        <p className="dashboard-subtitle">
          Daftar pesan masuk dari Contact Form
        </p>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-card-number">{contacts?.length ?? 0}</span>
          <span className="stat-card-label">
            {query ? `Hasil untuk "${query}"` : "Total Pesan"}
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Tabel dengan Optimistic UI */}
      {error ? (
        <p className="dashboard-error">Gagal memuat data: {error.message}</p>
      ) : (
        <ContactTable contacts={contacts ?? []} />
      )}

    </div>
  );
}