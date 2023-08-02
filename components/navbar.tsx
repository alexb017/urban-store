import Link from "next/link";
import LogoIcon from "./icons/logo";
import Search from "./search";
import Cart from "./cart";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <LogoIcon className="w-6 h-6 mr-1" />
            <div className="font-semibold uppercase">Urban Store</div>
          </Link>
          <Link href="/all" className="text-sm">
            All
          </Link>
          <Link href="/shirts" className="text-sm">
            Shirts
          </Link>
          <Link href="/hoodies" className="text-sm">
            Hoodies
          </Link>
        </div>
        <div className="flex">
          <Search />
        </div>
        <div className="flex">
          <Cart />
        </div>
      </div>
    </nav>
  );
}
