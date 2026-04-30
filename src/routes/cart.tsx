import { createFileRoute } from "@tanstack/react-router";
import { useCartStore } from "#/store/cartStore";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  const items = useCartStore((state) => state.items);
  const getTotal = useCartStore((state) => state.getTotal);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = getTotal();

  const handleCheckout = () => {
    if (items.length === 0) return;
    alert(`Checkout successful! Total: ฿${total.toLocaleString()}`);
    clearCart();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="w-full max-w-md p-8 text-white font-mono">
        <div className="space-y-4 mb-6 text-lg">
          {items.length === 0 ? (
            <p className="text-gray-400 text-center">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <span>{item.name}</span>
                  <span className="text-gray-400 ml-2">x{item.quantity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>฿{(item.price * item.quantity).toLocaleString()}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <hr className="border-gray-500 mb-6" />

        <div className="flex justify-between text-xl font-semibold mb-10">
          <span>Total</span>
          <span>฿{total.toLocaleString()}</span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={items.length === 0}
          className="w-full py-4 border-2 border-white rounded-2xl text-xl hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}