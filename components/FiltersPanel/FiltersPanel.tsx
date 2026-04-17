"use client";

import { useState } from "react";
import { Filters } from "@/types/filters";
import css from "./FiltersPanel.module.css";
import { FiX } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

type Props = {
  onSearch: (filters: Filters) => void;
};

export default function FiltersPanel({ onSearch }: Props) {
  const [filters, setFilters] = useState<Filters>({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });

  return (
    <div className={css.filtersContainer}>
      <div className={css.filterGroup}>
        <h3 className={css.itemTitle}>Location</h3>
        <div className={css.inputWrapper}>
          <FiMapPin className={css.icon} />
          <input
            className={css.location}
            placeholder="type your city..."
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
        </div>
      </div>
      <div className={css.filters}>
        <h3 className={css.filterTitle}>Filters</h3>

        <div className={css.filterGroup}>
          <h3 className={css.itemTitle}>Camper form</h3>
          {["alcove", "panel_van", "integrated", "semi_integrated"].map(
            (item) => (
              <label key={item} className={css.radio}>
                <input
                  type="radio"
                  name="form"
                  value={item}
                  checked={filters.form === item}
                  onChange={() => setFilters({ ...filters, form: item })}
                />
                {item}
              </label>
            )
          )}
        </div>

        <div className={css.filterGroup}>
          <h3 className={css.itemTitle}>Engine</h3>
          {["diesel", "petrol", "hybrid", "electric"].map((item) => (
            <label key={item} className={css.radio}>
              <input
                type="radio"
                name="engine"
                value={item}
                checked={filters.engine === item}
                onChange={() => setFilters({ ...filters, engine: item })}
              />
              {item}
            </label>
          ))}
        </div>

        <div className={css.filterGroup}>
          <h3 className={css.itemTitle}>Transmission</h3>
          {["automatic", "manual"].map((item) => (
            <label key={item} className={css.radio}>
              <input
                type="radio"
                name="transmission"
                value={item}
                checked={filters.transmission === item}
                onChange={() => setFilters({ ...filters, transmission: item })}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className={css.buttonGroup}>
        <button
          className={css.searchBtn}
          onClick={() => {
            console.log("filters:", filters);
            onSearch(filters);
          }}
        >
          Search
        </button>

        <button
          className={css.clearBtn}
          onClick={() =>
            setFilters({
              location: "",
              form: "",
              engine: "",
              transmission: "",
            })
          }
        >
          <FiX size={24} />
          Clear filters
        </button>
      </div>
    </div>
  );
}
