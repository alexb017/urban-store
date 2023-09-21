'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function FilterItem() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <h3 className="text-xs text-neutral-500 font-bold">Sort by</h3>
      <ul>
        <li>
          <Link
            href={`/search`}
            className={`text-sm hover:text-black ${
              pathname === '/search' && searchParams.get('sort') === null
                ? 'text-black border-b border-black'
                : 'text-neutral-500'
            }`}
          >
            Relevance
          </Link>
        </li>
        <li>
          <Link
            href={`/search?sort=toLowHigh`}
            className={`text-sm hover:text-black ${
              searchParams.get('sort') === 'toLowHigh'
                ? 'text-black border-b border-black'
                : 'text-neutral-500'
            }`}
          >
            Price: Low to high
          </Link>
        </li>
        <li>
          <Link
            href={`/search?sort=toHighLow`}
            className={`text-sm hover:text-black ${
              searchParams.get('sort') === 'toHighLow'
                ? 'text-black border-b border-black'
                : 'text-neutral-500'
            }`}
          >
            Price: high to low
          </Link>
        </li>
      </ul>
    </>
  );
}
