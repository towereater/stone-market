import { Listing } from "@classes/Listing";

const listingService = {
  getListings: async () => {
    // const response = await fetch(`${import.meta.env.VITE_API_HOST}/listings`, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // });

    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({}));
    //   throw new Error(errorData.message || "Failed to fetch listings");
    // }

    const mockListings: Listing[] = [
      { id: 1, location: "Verona, Italy", type: "Verde Alpi", price: "100", size: "120cm x 90cm", slabs: 10, image: "/images/slab.jpg" },
      { id: 2, location: "Verona, Italy", type: "Verde Alpi", price: "100", size: "120cm x 90cm", slabs: 10, image: "/images/slab.jpg" },
      { id: 3, location: "Verona, Italy", type: "Verde Alpi", price: "100", size: "120cm x 90cm", slabs: 10, image: "/images/slab.jpg" },
    ];

    // return response.json();
    return mockListings;
  }
};

export default listingService;
