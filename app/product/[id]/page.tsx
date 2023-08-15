import Gallery from "@/components/gallery";

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
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-slate-200 bg-slate-100 p-8 md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Gallery
            images={product.images.map((image: string) => ({ src: image }))}
          />
        </div>
        <div className="basis-full lg:basis-2/6"></div>
      </div>
    </div>
  );
}

/*
<div>{product.id}</div>
      <div>{product.name}</div>
      <div>
        <ul>
          {product.color.map((color: string, index: string) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
*/
