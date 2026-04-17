"use client";

import CampersList from "@/components/CampersList/CampersList";
import FiltersPanel from "@/components/FiltersPanel/FiltersPanel";
import { useState } from "react";
import { Filters } from "@/types/filters";
import css from "./CampersPageClient.module.css";

export default function CampersPageClient() {
  const [filters, setFilters] = useState<Filters>({});
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      {/* 🔘 кнопка */}
      <button onClick={() => setIsOpen(true)} className={css.filtersBtn}>
        Filters
      </button>

      {/* 📱 drawer */}
      {isOpen && (
        <div className={css.overlay}>
          <div className={css.backdrop} onClick={() => setIsOpen(false)} />
          <div className={css.drawer}>
            <button onClick={() => setIsOpen(false)}>✕</button>

            <FiltersPanel
              onSearch={(data) => {
                setFilters(data);
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* 🔥 ОЦЕ ГОЛОВНЕ */}
      <div className={css.layout}>
        <aside className={css.sidebar}>
          <FiltersPanel onSearch={setFilters} />
        </aside>

        <main className={css.content}>
          <CampersList filters={filters} />
        </main>
      </div>
    </div>
  );
}
