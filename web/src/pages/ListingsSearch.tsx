import { Component, createSignal, createMemo, For } from "solid-js";

import ListingCard from "@/components/ui/ListingCard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const ListingsSearch: Component = () => {
  const allListings = [
    { id: 1, title: "Bianco Carrara", slabs: 12, type: "Marble", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=400" },
    { id: 2, title: "Verde Alpi", slabs: 8, type: "Marble", image: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400" },
    { id: 3, title: "Nero Marquina", slabs: 5, type: "Granite", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400" },
    { id: 4, title: "Calacatta Gold", slabs: 15, type: "Marble", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" },
  ];
  
  const [searchTerm, setSearchTerm] = createSignal("");
  const [minSlabs, setMinSlabs] = createSignal(0);

  const filteredResults = createMemo(() => {
    return allListings.filter(item => {
      const matchesName = item.title.toLowerCase().includes(searchTerm().toLowerCase());
      const matchesSlabs = item.slabs >= minSlabs();
      return matchesName && matchesSlabs;
    });
  });

  return (
    <div class="min-h-screen bg-[#e5e5e5]">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <h1 class="text-3xl font-bold mb-8">Search Marbles</h1>

        <div class="flex flex-col md:flex-row gap-8">
          <aside class="w-full md:w-64 shrink-0">
            <div class="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h2 class="font-bold mb-4">Filters</h2>
              <div class="flex flex-col gap-4">
                <Input 
                  label="Search name..." 
                  placeholder="e.g. Carrara" 
                  value={searchTerm()}
                  onInput={(e) => setSearchTerm(e.currentTarget.value)}
                />
                <Input 
                  label="Min Slabs" 
                  type="number" 
                  value={minSlabs()}
                  onInput={(e) => setMinSlabs(parseInt(e.currentTarget.value) || 0)}
                />
                <Button 
                  variant="secondary" 
                  class="w-full mt-2"
                  onClick={() => { setSearchTerm(""); setMinSlabs(0); }}
                >
                  Reset Filters
                </Button>
              </div>
              
              <div class="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
                Found {filteredResults().length} materials
              </div>
            </div>
          </aside>

          <main class="flex-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <For each={filteredResults()} fallback={
                <div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-lg">
                  No materials match your search.
                </div>
              }>
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
