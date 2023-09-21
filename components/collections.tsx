'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Collections() {
  const pathname = usePathname();

  return (
    <>
      <h3 className="text-xs text-neutral-500 font-bold dark:text-neutral-100">
        Collections
      </h3>
      <ul>
        <li>
          <Link
            href="/search"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            href="/search/shirts"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/shirts'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Shirts
          </Link>
        </li>
        <li>
          <Link
            href="/search/headwear"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/headwear'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Headwear
          </Link>
        </li>
        <li>
          <Link
            href="/search/drinkware"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/drinkware'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Drinkware
          </Link>
        </li>
        <li>
          <Link
            href="/search/bags"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/bags'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Bags
          </Link>
        </li>
        <li>
          <Link
            href="/search/shoes"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/shoes'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Shoes
          </Link>
        </li>
        <li>
          <Link
            href="/search/hoodies"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/hoodies'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Hoodies
          </Link>
        </li>
        <li>
          <Link
            href="/search/sweaters"
            className={`text-sm hover:text-black dark:hover:text-neutral-100 ${
              pathname === '/search/sweaters'
                ? 'text-black border-b border-black dark:text-neutral-100 dark:border-neutral-300'
                : 'text-neutral-500 dark:text-neutral-300'
            }`}
          >
            Sweaters
          </Link>
        </li>
      </ul>
    </>
  );
}
