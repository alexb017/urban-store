'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Collections() {
  const pathname = usePathname();

  return (
    <>
      <h3 className="text-xs text-slate-500 font-bold">Collections</h3>
      <ul>
        <li>
          <Link
            href="/search"
            className={`text-sm hover:text-black ${
              pathname === '/search'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            href="/search/shirts"
            className={`text-sm hover:text-black ${
              pathname === '/search/shirt'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Shirts
          </Link>
        </li>
        <li>
          <Link
            href="/search/headwear"
            className={`text-sm hover:text-black ${
              pathname === '/search/headwear'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Headwear
          </Link>
        </li>
        <li>
          <Link
            href="/search/drinkware"
            className={`text-sm hover:text-black ${
              pathname === '/search/drinkware'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Drinkware
          </Link>
        </li>
        <li>
          <Link
            href="/search/bags"
            className={`text-sm hover:text-black ${
              pathname === '/search/bags'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Bags
          </Link>
        </li>
        <li>
          <Link
            href="/search/shoes"
            className={`text-sm hover:text-black ${
              pathname === '/search/shoes'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Shoes
          </Link>
        </li>
        <li>
          <Link
            href="/search/hoodies"
            className={`text-sm hover:text-black ${
              pathname === '/search/hoodies'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Hoodies
          </Link>
        </li>
        <li>
          <Link
            href="/search/sweaters"
            className={`text-sm hover:text-black ${
              pathname === '/search/sweaters'
                ? 'text-black border-b border-black'
                : 'text-slate-500'
            }`}
          >
            Sweaters
          </Link>
        </li>
      </ul>
    </>
  );
}
