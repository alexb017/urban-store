import Link from 'next/link';
import LogoIcon from './icons/logo';
import Search from './search';
import Cart from './cart/index';
import DarkTheme from './dark-theme';

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1">
            <LogoIcon className="w-6 h-6" />
            <div className="font-semibold uppercase">Urban Store</div>
          </Link>
          <Link
            href="/search"
            className="text-sm hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
          >
            All
          </Link>
          <Link
            href="/search/shirts"
            className="text-sm hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
          >
            Shirts
          </Link>
          <Link
            href="/search/hoodies"
            className="text-sm hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
          >
            Hoodies
          </Link>
        </div>
        {/* <div className="flex">
          <Search />
        </div> */}
        <div className="flex items-center gap-6">
          <DarkTheme />
          <Cart />
        </div>
      </div>
    </nav>
  );
}
