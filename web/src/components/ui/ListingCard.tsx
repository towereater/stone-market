import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { Button } from "./Button";

interface ListingCardProps {
  id: string | number;
  title: string;
  image: string;
  price?: string;
  location?: string;
  slabs: number;
}

export const ListingCard: Component<ListingCardProps> = (props) => {
  return (
    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <img src={props.image} alt={props.title} class="w-full h-48 object-cover" />
      <div class="p-4 flex flex-col flex-1">
        <h3 class="font-bold text-lg text-gray-900 mb-1">{props.title}</h3>
        <p class="text-sm text-gray-500 mb-4">{props.location || "Verona, Italy"}</p>
        
        <div class="flex justify-between items-center mt-auto">
          <span class="text-sm font-medium">{props.slabs} slabs avail.</span>
          <A href={`/listings/${props.id}`}>
            <Button variant="secondary" class="px-4 py-1 text-xs">View Detail</Button>
          </A>
        </div>
      </div>
    </div>
  );
};
