import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useCartStore } from "#/store/cartStore";

function Navbar() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-4 bg-amber-300 text-black flex justify-between">
      <p
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate({ to: "/" });
        }}
      >
        Tea shop
      </p>
      <div>
        <button
          className="relative p-2"
          onClick={() => {
            navigate({ to: "/cart" });
          }}
        >
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transform translate-x-1 -translate-y-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;