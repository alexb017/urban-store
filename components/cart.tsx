import CartIcon from "./icons/cart";

export default function Cart() {
  return (
    <button type="button" className="flex text-neutral-500">
      <CartIcon className="w-5 h-5" />
    </button>
  );
}
