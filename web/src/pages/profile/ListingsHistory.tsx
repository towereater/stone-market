import { Component, createSignal, For } from "solid-js";
import { Listing } from "@classes/Listing";
import listingService from "@services/listing";

import ListingCard from "@components/shared/ListingCard";
import ListingFilterMenu from "@/components/shared/ListingFilterMenu";

const ListingsHistory: Component = () => {
  const [listings, setListings] = createSignal<Listing[]>([]);

  (async () => {
    setListings(await listingService.getListings());
  })();

  return (
    <div class="flex gap-8 items-start w-full">
      
      <div class="flex-1 flex flex-col gap-6">
        <p class="text-2xl font-bold text-gray-900 mb-2">Listings History</p>

        <For each={listings()}>
          {(listing) => {
            return (
              <ListingCard listing={listing} />
            );
          }}
        </For>
      </div>

      <ListingFilterMenu />

    </div>
  );
};

export default ListingsHistory;
