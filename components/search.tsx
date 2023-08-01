import MagnifierIcon from "./icons/magnifier";

export default function Search() {
  return (
    <form className="max-w-lg relative flex items-center">
      <input
        type="text"
        name="search"
        placeholder="Search for products..."
        className="px-4 py-2 text-sm border rounded-lg placeholder:text-neutral-500"
      />
      <div className="absolute right-0 mr-3 flex items-center text-neutral-500">
        <MagnifierIcon className="w-4 h-4" />
      </div>
    </form>
  );
}
