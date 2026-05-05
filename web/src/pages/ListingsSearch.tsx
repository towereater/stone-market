import { Component, createSignal, createMemo, For } from "solid-js";
import { Listing } from "@classes/Listing";
import listingService from "@services/listing";

import ListingFilterMenu from "@components/shared/ListingFilterMenu";
import ListingCard from "@components/shared/ListingCard";

const ListingsSearch: Component = () => {
  const [listings, setListings] = createSignal<Listing[]>([]);

  (async () => {
    setListings(await listingService.getListings());
  })();

  // const [searchTerm, setSearchTerm] = createSignal("");
  // const [minSlabs, setMinSlabs] = createSignal(0);

  // const filteredResults = createMemo(() => {
  //   return allListings.filter(item => {
  //     const matchesName = item.title.toLowerCase().includes(searchTerm().toLowerCase());
  //     const matchesSlabs = item.slabs >= minSlabs();
  //     return matchesName && matchesSlabs;
  //   });
  // });

  return (
    <div class="flex gap-8 p-8 items-start w-full">

      <ListingFilterMenu />

      <div class="flex-1 flex flex-col gap-6">
        <p class="text-2xl font-bold text-gray-900 mb-2">Searched listings</p>

        <For each={listings()} fallback={
          <div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-lg">
            No materials match your search.
          </div>
        }>
          {(listing) => {
            return (
              <ListingCard listing={listing} />
            );
          }}
        </For>
      </div>

    </div>
  );
};

export default ListingsSearch;
