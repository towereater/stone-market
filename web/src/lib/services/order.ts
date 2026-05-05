import { Order } from "@classes/Order";

const orderService = {
  createOrder: async (username: string, quantity: string) => {
    // const response = await fetch(`${import.meta.env.VITE_API_HOST}/orders`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username,
    //     quantity,
    //   }),
    // });

    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({}));
    //   throw new Error(errorData.message || "Failed to create order");
    // }

    const mockOrder: Order = {
      id: "123",
      size: "120cm x 90cm",
      slabs: 10,
    };

    // return response.json();
    return mockOrder;
  },
};

export default orderService;
