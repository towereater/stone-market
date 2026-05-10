export interface Listing {
  id: string;
  location: string;
  type: string;
  price: string;
  slabs: number;
  size: string;
  notes?: string;
  image?: string;
}

export interface CreateListingRequest {
  location: string;
  type: string;
  price: string;
  slabs: number;
  size: {
    width: number;
    height: number;
    thick: number;
  };
  notes?: string;
  image?: string;
}
