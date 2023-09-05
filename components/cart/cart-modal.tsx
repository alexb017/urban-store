'use client';

import { Dialog, Transition } from '@headlessui/react';
import CartIcon from '../icons/cart';
import { useState } from 'react';
import CloseIcon from '../icons/close';
import Link from 'next/link';
import Image from 'next/image';

type Cart = {
  id: number;
  image: string;
  name: string;
  price: string;
  color: string;
  size: string;
  imgUrl: string;
};

export default function CartModal({ cart }: { cart: Cart[] | [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantity = 0;

  console.log(cart);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  const arr: Cart[] = Object.entries(cart)
    .filter(([key, value]) => key !== '-Nd')
    .map(([key, value]) => value);

  console.log(arr);
  return (
    <>
      <button
        type="button"
        onClick={openCart}
        className="relative flex text-neutral-500"
      >
        <CartIcon className="w-5 h-5" />
        {quantity > 0 && (
          <div className="absolute top-0 right-0 -mr-2 -mt-2 h-4 w-4 rounded text-[11px] font-medium text-white bg-blue-500">
            {quantity}
          </div>
        )}
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart}>
          <Dialog.Panel className="fixed top-0 right-0 bottom-0 flex flex-col w-full h-full border-1 border-slate-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">My Cart</h3>
              <button type="button" onClick={closeCart}>
                <CloseIcon className="h-5" />
              </button>
            </div>
            {arr.length === 0 ? (
              <div className="mt-20 w-full flex flex-col items-center justify-center">
                <CartIcon className="h-16" />
                <p className="mt-6 text-2xl font-bold">Your cart is empty.</p>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-between p-1">
                <ul className="py-4">
                  {arr.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="w-full flex flex-col border-b border-neutral-300"
                      >
                        <div className="relative flex flex-row justify-between">
                          <Link href={item.imgUrl}>
                            <Image
                              className="h-full w-full object-cover"
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                            />
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
