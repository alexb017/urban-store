'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Collections() {
  const pathname = usePathname();

  return (
    <>
      <h3 className="text-xs text-neutral-500 font-bold dark:text-neutral-200">
        Collections
      </h3>
      <ul>
        <li>
          <Link
            href="/search"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            href="/search/shirts"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/shirts'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Shirts
          </Link>
        </li>
        <li>
          <Link
            href="/search/headwear"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/headwear'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Headwear
          </Link>
        </li>
        <li>
          <Link
            href="/search/drinkware"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/drinkware'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Drinkware
          </Link>
        </li>
        <li>
          <Link
            href="/search/bags"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/bags'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Bags
          </Link>
        </li>
        <li>
          <Link
            href="/search/shoes"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/shoes'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Shoes
          </Link>
        </li>
        <li>
          <Link
            href="/search/hoodies"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/hoodies'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Hoodies
          </Link>
        </li>
        <li>
          <Link
            href="/search/sweaters"
            className={`text-sm hover:text-black dark:hover:text-neutral-300 ${
              pathname === '/search/sweaters'
                ? 'text-black border-b border-black dark:text-neutral-200 dark:border-neutral-200'
                : 'text-neutral-500'
            }`}
          >
            Sweaters
          </Link>
        </li>
      </ul>
    </>
  );
}
