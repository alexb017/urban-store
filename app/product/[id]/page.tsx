import Gallery from '@/components/gallery';
import ProductDescription from '@/components/product-description';
import Link from 'next/link';
import Image from 'next/image';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  let product: any;

  try {
    const res = await fetch(
      `https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsDetails/id${id}.json`
    );

    if (!res.ok) {
      throw new Error('Request failed');
    }

    product = (await res.json()) || [];
  } catch (error) {
    throw 'An error has occurred';
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-neutral-100 p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Gallery
            images={product?.images.map((image: string) => ({ src: image }))}
          />
        </div>
        <div className="basis-full lg:basis-2/6">
          <ProductDescription product={product} />
        </div>
      </div>
      <RelatedProducts id={id} />
    </div>
  );
}

type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

async function RelatedProducts({ id }: { id: string }) {
  let products: Product[];

  try {
    const res = await fetch(
      'https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/products.json'
    );

    if (!res.ok) {
      throw new Error('Request failed');
    }

    products = (await res.json()) || [];
  } catch (error) {
    throw 'An error has occurred';
  }

  // remove the product from current page
  const filteredProducts = products.filter(
    (product) => product.id !== Number.parseInt(id, 10)
  );

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="aspect-ratio w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative block aspect-square border rounded-lg border-neutral-200 w-full h-full bg-neutral-100 overflow-hidden group dark:border-neutral-700 dark:bg-neutral-900"
              href={`/product/${product.id}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                className="group-hover:scale-105 transition-transform"
              />
              <div className="flex items-center gap-2 absolute backdrop-blur bottom-3 left-3 border rounded-full py-1 px-1 pl-2 bg-neutral-100 bg-opacity-30 dark:bg-neutral-900 dark:border-neutral-700">
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
