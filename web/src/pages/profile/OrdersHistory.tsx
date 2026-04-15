import { Component, For } from "solid-js";

const OrdersHistory: Component = () => {
  const orders = [
    { id: "ORD-9921", date: "2023-10-24", material: "Bianco Carrara", status: "In Transit", total: "€2,400" },
    { id: "ORD-8812", date: "2023-09-15", material: "Nero Marquina", status: "Delivered", total: "€1,150" },
  ];

  return (
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-50 border-b border-gray-100">
          <tr>
            <th class="p-4 text-xs font-bold uppercase text-gray-500">Order ID</th>
            <th class="p-4 text-xs font-bold uppercase text-gray-500">Material</th>
            <th class="p-4 text-xs font-bold uppercase text-gray-500">Date</th>
            <th class="p-4 text-xs font-bold uppercase text-gray-500">Status</th>
            <th class="p-4 text-xs font-bold uppercase text-gray-500 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <For each={orders}>
            {(order) => (
              <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td class="p-4 font-mono text-sm text-blue-600">{order.id}</td>
                <td class="p-4 font-medium">{order.material}</td>
                <td class="p-4 text-sm text-gray-600">{order.date}</td>
                <td class="p-4">
                  <span class={`px-2 py-1 rounded-full text-xs font-bold ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td class="p-4 text-right font-bold">{order.total}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersHistory;
