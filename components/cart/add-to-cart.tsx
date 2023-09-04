'use client';

import { useRouter } from 'next/navigation';

export default function AddToCart({
  product,
  color,
  size,
}: {
  product: any;
  color: string;
  size: string;
}) {
  const router = useRouter();
  const randomId = Math.floor(Math.random() * 100) + 1;
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 w-full p-4 mt-4 rounded-full bg-blue-500 text-white hover:opacity-90"
      onClick={async () => {
        await fetch(
          `https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsCart.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: randomId,
              name: product.name,
              price: product.price,
              color: color,
              size: size,
              image: product.images[0],
            }),
          }
        );

        router.refresh();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
        />
      </svg>
      Add item to cart
    </button>
  );
}
