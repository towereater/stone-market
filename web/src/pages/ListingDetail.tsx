import { Component, createSignal } from "solid-js";
import { useNavigate,useParams } from "@solidjs/router";
import { Button } from "@/components/ui/Button";

const ListingDetail: Component = () => {
  // Path parameters extraction
  const params = useParams();

  const navigate = useNavigate();
  const [isOrdering, setIsOrdering] = createSignal(false);

  const placeOrder = async () => {
    setIsOrdering(true);
    // TODO: REMOVE MOCK API CALL
    await new Promise(r => setTimeout(r, 1000));
    alert("Order placed successfully!");

    navigate("/profile/orders");
  };

  return (
    <div class="min-h-screen bg-white">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <button class="text-[#1e3a8a] mb-6 hover:underline">← Back to search</button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=800" 
              class="w-full rounded-xl shadow-lg mb-4" 
            />
            <div class="grid grid-cols-4 gap-4">
              <div class="h-20 bg-gray-200 rounded"></div>
              <div class="h-20 bg-gray-200 rounded"></div>
              <div class="h-20 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div class="flex flex-col">
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Verde Alpi</h1>
            <p class="text-xl text-[#1e3a8a] font-medium mb-6">Italian Marble - Premium Grade</p>
            
            <div class="bg-gray-50 p-6 rounded-lg mb-8 grid grid-cols-2 gap-y-4">
              <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider">Available Slabs</span>
                <span class="text-lg font-bold">10 Pieces</span>
              </div>
              <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider">Dimensions</span>
                <span class="text-lg font-bold">120 x 90 cm</span>
              </div>
              <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider">Thickness</span>
                <span class="text-lg font-bold">20 mm</span>
              </div>
            </div>

            <p class="text-gray-600 mb-8 leading-relaxed">
              Beautiful Verde Alpi marble with deep green tones and white veining. 
              Perfect for luxury countertops, flooring, and wall cladding. 
              All slabs are book-matched and ready for shipment.
            </p>

            <div class="flex gap-4 mt-auto">
              <Button class="flex-1 py-4 text-base">Request Quote</Button>
              <Button variant="secondary" class="flex-1 py-4 text-base">Download PDF</Button>
            </div>
            <div class="flex gap-4 mt-auto">
              <Button 
                onClick={placeOrder} 
                isLoading={isOrdering()} 
                class="flex-1 py-4 text-base bg-green-600 hover:bg-green-700"
              >
                Place Order Now
              </Button>
              <Button variant="secondary" class="flex-1 py-4 text-base">Contact Seller</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
