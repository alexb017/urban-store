export default function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  return <h1>{category}</h1>;
}
