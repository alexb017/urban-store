import ProductGrid from '@/components/product-grid';

export default async function Search() {
  const res = await fetch(
    'https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/products.json',
    { cache: 'no-store' }
  );
  const products: any[] = (await res.json()) || [];

  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
