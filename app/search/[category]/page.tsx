import ProductGrid from '@/components/product-grid';

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
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

  const filtered = products.filter((product) => product.category === category);

  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductGrid products={filtered} />
      </div>
    </>
  );
}
