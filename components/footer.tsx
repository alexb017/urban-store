import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex items-center justify-between mx-auto w-full max-w-7xl p-4 pt-8 mt-8 min-[1280px]:px-0 border-t border-neutral-500 dark:border-neutral-700">
      <p className="text-sm">&copy; 2023, Urban Store.</p>
      <ul className="flex items-center gap-4">
        <li>
          <Link
            href="/"
            className="text-sm hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/credits"
            className="text-sm hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
          >
            Credits
          </Link>
        </li>
      </ul>
    </div>
  );
}
