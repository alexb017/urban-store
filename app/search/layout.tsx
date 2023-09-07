import Collections from '@/components/collections';

export default function LayoutSearch({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-col gap-8 px-4 pb-4 max-w-screen-2xl md:flex-row">
      <div className="w-full flex-none md:max-w-[125px]">
        <Collections />
      </div>
      <div className="min-h-screen w-full">{children}</div>
      <div className="flex-none md:w-[125px]">
        <h1>Sort by</h1>
        <ul>
          <li>Relevance</li>
          <li>Price: Low to high</li>
          <li>Price: High to low</li>
        </ul>
      </div>
    </div>
  );
}
