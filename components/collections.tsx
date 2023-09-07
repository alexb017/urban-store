'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Collections() {
  const pathname = usePathname();
  console.log(pathname);
  return (
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
          href="/search/shirt"
          className={`text-sm hover:text-black ${
            pathname === '/search/shirt'
              ? 'text-black border-b border-black'
              : 'text-slate-500'
          }`}
        >
          T-Shirts
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
          href="/search/bag"
          className={`text-sm hover:text-black ${
            pathname === '/search/bag'
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
          href="/search/hoodie"
          className={`text-sm hover:text-black ${
            pathname === '/search/hoodie'
              ? 'text-black border-b border-black'
              : 'text-slate-500'
          }`}
        >
          Hoodies
        </Link>
      </li>
      <li>
        <Link
          href="/search/sweater"
          className={`text-sm hover:text-black ${
            pathname === '/search/sweater'
              ? 'text-black border-b border-black'
              : 'text-slate-500'
          }`}
        >
          Sweater
        </Link>
      </li>
    </ul>
  );
}
