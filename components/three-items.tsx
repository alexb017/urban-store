import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

function Item({ item, size }: { item: Product; size: 'full' | 'half' }) {
  const classFullPrice =
    'flex items-center gap-2 absolute backdrop-blur bottom-48 left-28 border rounded-full py-1 px-1 pl-2 bg-neutral-100 bg-opacity-30 dark:bg-black dark:border-neutral-700';
  const classHalfPrice =
    'flex items-center gap-2 absolute backdrop-blur bottom-3 left-3 border rounded-full py-1 px-1 pl-2 bg-neutral-100 bg-opacity-30 dark:bg-black dark:border-neutral-700';
  return (
    <div
      className={
        size === 'full'
          ? 'md:col-span-4 md:row-span-2'
          : 'md:col-span-2 md:row-span-1'
      }
    >
      <Link
        className="relative block aspect-square rounded-lg border-neutral-200 w-full h-full bg-neutral-100 overflow-hidden group dark:bg-black dark:border-neutral-800"
        href={`/product/${item.id}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes={
            size === 'full'
              ? '(min-width: 768px) 66vw, 100vw'
              : '(min-width: 768px) 33vw, 100vw'
          }
          className="group-hover:scale-105 transition-transform"
        />
        <div className={size === 'full' ? classFullPrice : classHalfPrice}>
          <div className="text-xs">{item.name}</div>
          <div className="text-xs text-center rounded-full py-1 px-2 text-white bg-blue-500">
            ${item.price} USD
          </div>
        </div>
      </Link>
    </div>
  );
}

export default async function ThreeItemsGrid() {
  let products: any[];
  try {
    const res = await fetch(
      'https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error('Request failed');
    }

    products = (await res.json()) || [];
  } catch (error) {
    throw 'An error has occurred';
  }

  if (!products[0] || !products[1] || !products[2]) {
    return null;
  }

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <Item item={firstProduct} size="full" />
      <Item item={secondProduct} size="half" />
      <Item item={thirdProduct} size="half" />
    </div>
  );
}
