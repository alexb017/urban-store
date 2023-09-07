export default function FilterItem() {
  return (
    <>
      <h3 className="text-xs text-slate-500 font-bold">Sort by</h3>
      <ul>
        <li className="text-sm text-slate-500">Relevance</li>
        <li className="text-sm text-slate-500">Price: Low to high</li>
        <li className="text-sm text-slate-500">Price: High to low</li>
      </ul>
    </>
  );
}
