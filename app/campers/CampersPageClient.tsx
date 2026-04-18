"use client";

import CampersList from "@/components/CampersList/CampersList";
import FiltersPanel from "@/components/FiltersPanel/FiltersPanel";
import { useState } from "react";
import { Filters } from "@/types/filters";
import css from "./CampersPageClient.module.css";
import { FiSliders } from "react-icons/fi";

export default function CampersPageClient() {
  const [filters, setFilters] = useState<Filters>({});
  const [isOpen, setIsOpen] = useState(false);
  const handleClearFilters = () => {
    setFilters({});
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.floatingBtn} onClick={() => setIsOpen(true)}>
        <FiSliders />
      </button>

      {isOpen && (
        <div className={css.overlay}>
          <div className={css.backdrop} onClick={() => setIsOpen(false)} />

          <div className={css.bottomSheet}>
            <div className={css.handle} />

            <FiltersPanel
              filters={filters}
              onSearch={(data) => {
                setFilters(data);
                setIsOpen(false);
              }}
              onClear={handleClearFilters}
            />
          </div>
        </div>
      )}

      <div className={css.layout}>
        <aside className={css.sidebar}>
          <FiltersPanel
            filters={filters}
            onSearch={setFilters}
            onClear={handleClearFilters}
          />
        </aside>

        <main className={css.content}>
          <CampersList filters={filters} />
        </main>
      </div>
    </div>
  );
}
