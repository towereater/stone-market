import { CreateListingRequest, Listing } from "@classes/Listing";

const mockListing: Listing = {
  id: "1",
  location: "Verona, Italy",
  type: "Verde Alpi",
  price: "100",
  size: "120cm x 90cm",
  slabs: 10,
  image: "/images/slab.jpg",
};

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
      mockListing,
      mockListing,
      mockListing,
    ];
    const response = { json: () => Promise.resolve(mockListings) };

    return response.json();
  },

  getListing: async (id: string) => {
    // const response = await fetch(`${import.meta.env.VITE_API_HOST}/listings/{id}`, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // });

    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({}));
    //   throw new Error(errorData.message || "Failed to fetch listing {id} details");
    // }

    const response = { json: () => Promise.resolve(mockListing) };

    return response.json();
  },

  createListing: async (req: CreateListingRequest) => {
    // const response = await fetch(`${import.meta.env.VITE_API_HOST}/listings`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(req),
    // });

    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({}));
    //   throw new Error(errorData.message || "Failed to create listing");
    // }

    const response = { json: () => Promise.resolve(mockListing) };

    return response.json();
  }
};

export default listingService;
