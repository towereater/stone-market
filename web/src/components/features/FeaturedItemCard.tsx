import { Component } from "solid-js";
import { t } from "@store/i18n";
import { FeaturedItemType } from "@classes/types";

interface Props {
  item: FeaturedItemType;
}

const FeaturedItemCard: Component<Props> = (props) => {
  return (
    <div class="bg-gray-100 flex flex-col group cursor-pointer">
      <div class="w-full aspect-[3/4] overflow-hidden mb-4 relative shadow-md">
        <img
          src={props.item.img}
          alt={props.item.name}
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div class="text-left px-2">
        <h3 class="font-bold text-gray-900 text-lg">{props.item.name}</h3>
        <p class="text-sm text-gray-500 mt-1">{t('featured.dimensions')}: {props.item.dim}</p>
        <p class="text-sm text-gray-500">{t('featured.seller')}: {props.item.seller}</p>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
