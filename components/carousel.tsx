import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

export default async function Carousel() {
  let products: Product[];

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

  // duplicating products to make the carousel loop
  const carouselProducts = [...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, index) => (
          <li
            key={`${product.id}${index}`}
            className="aspect-ratio w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative block aspect-square w-full h-full bg-slate-100 overflow-hidden group"
              href={`/product/${product.id}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="group-hover:scale-105 transition-transform"
              />
              <div className="flex items-center gap-2 absolute backdrop-blur bottom-3 left-3 border rounded-full py-1 px-1 pl-2 bg-slate-100 bg-opacity-30">
                <div className="text-xs">{product.name}</div>
                <div className="text-xs text-center rounded-full py-1 px-2 text-white bg-blue-500">
                  ${product.price} USD
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
