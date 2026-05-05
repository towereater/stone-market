import { Component } from "solid-js";

import Button from "@components/ui/Button";

const ListingFilterMenu: Component = () => {
  return (
    <aside class="w-72 flex flex-col">
      <h2 class="text-xl font-bold mb-6 text-gray-900">Filters</h2>

      <div class="mb-4 border-b border-gray-300 pb-4">
        <div class="flex justify-between items-center text-sm font-medium text-gray-800 cursor-pointer">
          Marble type
          <span>&#8964;</span>
        </div>
      </div>

      <div class="mb-4 border-b border-gray-300 pb-4">
        <div class="flex justify-between items-center text-sm font-medium text-gray-800 cursor-pointer">
          Listing date
          <span>&#8964;</span>
        </div>
      </div>

      <div class="flex gap-4 mt-4">
        <Button variant="secondary">Apply</Button>
        <Button variant="primary">Clear</Button>
      </div>
    </aside>
  );
};

export default ListingFilterMenu;
