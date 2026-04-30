import Item from "#/components/Item";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const items = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500",
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard RGB",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500",
  },
  {
    id: 3,
    name: "Smart Watch Series 9",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500",
  },
  {
    id: 4,
    name: "Professional Mirrorless Camera",
    price: 45900,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500",
  },
  {
    id: 5,
    name: "Minimalist Leather Backpack",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500",
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 1850,
    image:
      "https://images.unsplash.com/photo-1608156639585-34a0a562559a?q=80&w=500",
  },
  {
    id: 7,
    name: "Ultra-wide Curved Monitor",
    price: 15900,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500",
  },
  {
    id: 8,
    name: "Ergonomic Office Chair",
    price: 6400,
    image:
      "https://images.unsplash.com/photo-1505797149-43b007662976?q=80&w=500",
  },
];

function App() {
  return (
    <div className="mt-20 grid grid-cols-4 gap-4">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
}