"use client";

import { fetchCampers } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import CamperCard from "@/components/CamperCard/CamperCard";
import { Filters } from "@/types/filters";
import css from "./CampersList.module.css";
import type { CampersResponse } from "@/types/camper";

type Props = {
  filters: Filters;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CampersList({ filters }: Props) {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery<
      CampersResponse,
      Error,
      CampersResponse,
      [_: string, Filters],
      number
    >({
      queryKey: ["campers", filters],

      queryFn: ({ pageParam = 1 }) => fetchCampers(pageParam, filters),

      initialPageParam: 1,

      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    });

  if (isLoading) {
    return (
      <div className={css.loader}>
        <div className={css.spinner}></div>
      </div>
    );
  }

  return (
    <section className={css.container}>
      <ul className={css.camperList}>
        {data?.pages?.flatMap((page) =>
          page.campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        )}
      </ul>

      {hasNextPage && (
        <button
          className={css.paginationBtn}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </section>
  );
}
