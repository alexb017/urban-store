'use client';

import { useRouter, usePathname } from 'next/navigation';

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
  const url = usePathname();
  const randomId: number = Math.floor(Math.random() * 1000);

  let defaultVariant = color === '' || size === '';

  if (product?.color === undefined && product?.size === undefined) {
    defaultVariant = false;
  }

  if (product?.color === undefined && size !== '') {
    defaultVariant = false;
  }

  if (color !== '' && product?.size === undefined) {
    defaultVariant = false;
  }

  return (
    <button
      type="button"
      disabled={defaultVariant}
      className={`flex items-center justify-center gap-2 w-full p-4 mt-4 rounded-full bg-blue-500 text-white hover:opacity-90 ${
        defaultVariant
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer opacity-100'
      }`}
      onClick={async () => {
        try {
          const res = await fetch(
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
                imgUrl: url,
                quantity: 1,
                priceId: product.priceId,
              }),
            }
          );

          if (!res.ok) {
            throw new Error('Request failed');
          }
        } catch (error) {
          throw 'Error adding new item to cart';
        }

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
