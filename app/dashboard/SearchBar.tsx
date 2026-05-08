"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("query", value);
      } else {
        params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace]
  );

  return (
    <div className="search-wrap">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Cari nama atau email..."
        defaultValue={searchParams.get("query") ?? ""}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
}