"use client";

import { useState, useEffect } from "react";
import { Filters } from "@/types/filters";
import css from "./FiltersPanel.module.css";
import { FiX } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

type Props = {
  filters: Filters;
  onSearch: (filters: Filters) => void;
  onClear: () => void;
};

export default function FiltersPanel({ filters, onSearch, onClear }: Props) {
  const [localFilters, setLocalFilters] = useState<Filters>({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  return (
    <div className={css.filtersContainer}>
      <div className={css.filterGroup}>
        <h3 className={css.itemTitle}>Location</h3>
        <div className={css.inputWrapper}>
          <FiMapPin className={css.icon} />
          <input
            className={css.location}
            placeholder="type your city..."
            value={localFilters.location || ""}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, location: e.target.value })
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
                  checked={localFilters.form === item}
                  onChange={() =>
                    setLocalFilters({ ...localFilters, form: item })
                  }
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
                checked={localFilters.engine === item}
                onChange={() =>
                  setLocalFilters({ ...localFilters, engine: item })
                }
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
                checked={localFilters.transmission === item}
                onChange={() =>
                  setLocalFilters({ ...localFilters, transmission: item })
                }
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
            onSearch(localFilters);
          }}
        >
          Search
        </button>

        <button
          className={css.clearBtn}
          onClick={() => {
            const empty = {
              location: "",
              form: "",
              engine: "",
              transmission: "",
            };
            setLocalFilters(empty);
            onClear();
          }}
        >
          <FiX size={24} />
          Clear filters
        </button>
      </div>
    </div>
  );
}
