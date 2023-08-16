export default function AddToCart() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 w-full p-4 mt-4 rounded-full bg-blue-500 text-white hover:opacity-90"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
        />
      </svg>
      Add item to cart
    </button>
  );
}
