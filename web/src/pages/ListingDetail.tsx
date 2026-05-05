import { Component, createSignal } from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import { Listing } from "@classes/Listing";
import listingService from "@services/listing";
import orderService from "@services/order";

import Button from "@/components/ui/Button";

const ListingDetail: Component = () => {
  const params = useParams();

  var listing: Listing = {
    id: "1",
    location: "Verona, Italy",
    type: "Verde Alpi",
    price: "€200",
    slabs: 10,
    size: "120 x 90 cm",
    image: "/images/slab.jpg",
    notes: "Beautiful Verde Alpi marble with deep green tones and white veining. Perfect for luxury countertops, flooring, and wall cladding. All slabs are book-matched and ready for shipment.",
  };
  if (params.id) {
    (async () => {
      listing = await listingService.getListing(params.id || "");
    })();
  }

  const navigate = useNavigate();
  const [isOrdering, setIsOrdering] = createSignal(false);

  const placeOrder = async () => {
    setIsOrdering(true);

    await orderService.createOrder("username", listing.id || "");
    alert("Order placed successfully!");

    navigate("/profile/orders");
  };

  return (
    <div class="min-h-screen bg-white-400">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <button class="text-accent mb-6 hover:underline">Back to search</button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={listing.image || "/images/slab.jpg"}
              alt="Listing image"
              class="w-full rounded-xl shadow-lg"
            />
            {/* <div class="grid grid-cols-4 gap-4">
              <div class="h-20 bg-gray-200 rounded"></div>
              <div class="h-20 bg-gray-200 rounded"></div>
              <div class="h-20 bg-gray-200 rounded"></div>
            </div> */}
          </div>

          <div class="flex flex-col">
            <h1 class="text-4xl font-bold text-gray-900 mb-2">{listing.type}</h1>
            <p class="text-xl text-accent font-medium mb-6">{listing.location}</p>

            <div class="bg-gray-50 p-6 rounded-lg mb-8 grid grid-cols-2 gap-y-4">
              <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider">Available Slabs</span>
                <span class="text-lg font-bold">{listing.slabs}</span>
              </div>
              <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider">Dimensions</span>
                <span class="text-lg font-bold">{listing.size}</span>
              </div>
              <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider">Thickness</span>
                <span class="text-lg font-bold">20 mm</span>
              </div>
            </div>

            <p class="text-gray-600 leading-relaxed">
              {listing.notes}
            </p>

            <div class="flex gap-6 mt-auto">
              <Button
                onClick={placeOrder}
                isLoading={isOrdering()}
                variant="secondary"
                class="flex-1"
              >
                Place Order Now
              </Button>
              <Button variant="primary" class="flex-1">Contact Seller</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
