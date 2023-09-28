import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            className="relative block aspect-square border rounded-lg border-neutral-200 w-full h-full bg-neutral-100 overflow-hidden group dark:bg-neutral-900 dark:border-neutral-700"
            href={`/product/${product.id}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="group-hover:scale-105 transition-transform"
            />
            <div className="flex items-center gap-2 absolute backdrop-blur bottom-3 left-3 border rounded-full border-neutral-300 py-1 px-1 pl-2 bg-neutral-100 bg-opacity-30 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="text-xs">{product.name}</div>
              <div className="text-xs text-center rounded-full py-1 px-2 text-white bg-blue-500">
                ${product.price} USD
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
