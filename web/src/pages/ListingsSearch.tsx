import { Component, For } from "solid-js";
import { ListingCard } from "@/components/ui/ListingCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const ListingsSearch: Component = () => {
  const results = [
    { id: 1, title: "Bianco Carrara", slabs: 12, image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=400" },
    { id: 2, title: "Verde Alpi", slabs: 8, image: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400" },
    { id: 3, title: "Nero Marquina", slabs: 5, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400" },
    { id: 4, title: "Calacatta Gold", slabs: 15, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" },
  ];

  return (
    <div class="min-h-screen bg-[#e5e5e5]">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <h1 class="text-3xl font-bold mb-8">Search Marbles</h1>

        <div class="flex gap-8">
          <aside class="w-64 shrink-0 flex flex-col gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="font-bold mb-4">Filters</h2>
              <div class="flex flex-col gap-4">
                <Input label="Search name..." placeholder="e.g. Carrara" />
                <Input label="Min Slabs" type="number" />
                <Button class="w-full mt-2">Apply Filters</Button>
              </div>
            </div>
          </aside>

          <main class="flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <For each={results}>
                {(item) => <ListingCard {...item} />}
              </For>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListingsSearch;
