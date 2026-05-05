import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Listing } from "@classes/Listing";

import Button from "@components/ui/Button";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: Component<ListingCardProps> = (props) => {
  const navigate = useNavigate();

  const handleDetail = (id: string) => {
    navigate(`/listings/${id}`);
  };

  return (
    <div class="bg-white flex p-6 gap-6 rounded shadow-sm overflow-hidden transition-all">

      <img class="w-40 h-40 object-cover bg-gray-200"
        src={props.listing.image} alt={props.listing.id.toString()} />

      <div class="flex flex-col">
        <p class="text-lg font-bold text-gray-900">{props.listing.type}</p>

        <p class="text-sm text-gray-500 mb-2">{props.listing.location || "Verona, Italy"}</p>
        <p class="text-xl font-bold text-black-600 mb-2">€{props.listing.price}</p>
        <p class="text-sm font-medium text-gray-700">Slabs available: {props.listing.slabs}</p>

        <Button variant="secondary" class="w-16 px-4 py-1 mt-2 text-xs"
          onClick={() => handleDetail(props.listing.id)}>
          Details
        </Button>
      </div>

    </div>
  );
};

export default ListingCard;
