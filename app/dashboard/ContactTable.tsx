"use client";

import { useOptimistic, useTransition } from "react";
import { deleteContact } from "./actions";

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function ContactTable({
  contacts,
}: {
  contacts: Contact[];
}) {
  const [isPending, startTransition] = useTransition();
  const [optimisticContacts, removeOptimistic] = useOptimistic(
    contacts,
    (currentContacts, deletedId: string) =>
      currentContacts.filter((c) => c.id !== deletedId)
  );

  function handleDelete(formData: FormData) {
    const id = formData.get("id") as string;

    startTransition(async () => {
      // 1. Langsung hapus dari UI (optimistic)
      removeOptimistic(id);
      // 2. Baru jalankan server action di background
      await deleteContact(formData);
    });
  }

  return (
    <div className="dashboard-table-wrap">
      {optimisticContacts.length > 0 ? (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Pesan</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {optimisticContacts.map((c) => (
              <tr key={c.id} className="table-row-animate">
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td className="td-message">{c.message}</td>
                <td className="td-date">
                  {new Date(c.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td>
                  <form action={handleDelete}>
                    <input type="hidden" name="id" value={c.id} />
                    <button
                      type="submit"
                      className="btn-delete"
                      disabled={isPending}
                    >
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="dashboard-empty">Belum ada pesan masuk.</p>
      )}
    </div>
  );
}