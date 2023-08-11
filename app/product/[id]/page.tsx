export default async function ProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const res = await fetch(
    `https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsDetails/id${id}.json`,
    {
      next: { revalidate: 10 },
    }
  );
  const product: any = await res.json();
  return (
    <>
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>
        <ul>
          {product.color.map((color: string, index: string) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
