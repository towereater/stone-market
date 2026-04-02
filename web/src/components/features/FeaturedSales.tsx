import { Component, For } from "solid-js";
import { t } from "@store/i18n";
import { FeaturedItemType } from "@classes/types";
import FeaturedItemCard from "@components/features/FeaturedItemCard";

const FeaturedSales: Component = () => {
  const featuredItems: FeaturedItemType[] = [
    { id: 1, name: "Verde Alpi - Italy", dim: "100x100", seller: "Mario Rossi SRL", img: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Calacatta Gold", dim: "120x120", seller: "Marmi Pregiati SPA", img: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400&auto=format&fit=crop" },
    { id: 3, name: "Nero Marquina", dim: "80x80", seller: "Stone Design", img: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section class="max-w-6xl mx-auto py-12 px-8">
      <h2 class="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-gray-300 inline-block pb-1">
        {t('featured.title')}
      </h2>

      <div class="flex items-center justify-between gap-4">
        <button class="text-4xl text-gray-500 hover:text-gray-800">&lsaquo;</button>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <For each={featuredItems}>
            {(item) => <FeaturedItemCard item={item} />}
          </For>
        </div>

        <button class="text-4xl text-gray-500 hover:text-gray-800">&rsaquo;</button>
      </div>
    </section>
  );
};

export default FeaturedSales;