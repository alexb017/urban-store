'use client';

import { useState, useEffect, Fragment } from 'react';
import MenuIcon from './icons/menu';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import LogoIcon from './icons/logo';
import CloseIcon from './icons/close';
import DarkTheme from './dark-theme';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={openCart}
        className="relative flex text-neutral-500 p-2 border rounded border-neutral-300 group dark:text-neutral-200 dark:border-neutral-700"
      >
        <MenuIcon className="w-5 h-5 group-hover:scale-105 transition-transform" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed top-0 left-0 bottom-0 flex flex-col gap-2 w-full h-full bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:text-neutral-200 dark:bg-black/80">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={closeCart}
                  className="flex text-neutral-500 p-2 border rounded border-neutral-300 dark:text-neutral-200 dark:border-neutral-700"
                >
                  <CloseIcon className="h-5 hover:scale-105 transition-all" />
                </button>
                <DarkTheme />
              </div>
              <Link href="/" className="flex items-center gap-1 mt-4">
                <LogoIcon className="w-8 h-8" />
                <div className="font-semibold text-2xl uppercase">
                  Urban Store
                </div>
              </Link>
              <Link
                href="/search"
                className="text-lg hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
              >
                All
              </Link>
              <Link
                href="/search/shirts"
                className="text-lg hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
              >
                Shirts
              </Link>
              <Link
                href="/search/hoodies"
                className="text-lg hover:text-neutral-500 transition-colors dark:hover:text-neutral-300"
              >
                Hoodies
              </Link>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
