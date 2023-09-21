export default function About() {
  return (
    <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
      <h1 className="mb-8 text-5xl font-bold">Urban Store</h1>
      <ul className="list-disc pl-5 text-lg">
        <li>Integration with Stripe Checkout</li>
        <li>Fetch products from Firebase API</li>
        <li>Styling with Tailwind CSS</li>
        <li>Responsive UI</li>
        <li>Automatic light/dark mode based on system settings</li>
      </ul>
    </div>
  );
}
