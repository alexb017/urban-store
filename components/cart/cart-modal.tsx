'use client';

import { Dialog, Transition } from '@headlessui/react';
import CartIcon from '../icons/cart';
import { useState, useEffect } from 'react';
import CloseIcon from '../icons/close';
import Link from 'next/link';
import Image from 'next/image';
import DeleteItem from './delete-item';
import EditItemQuantity from './edit-item';
import { loadStripe } from '@stripe/stripe-js';
import { usePathname } from 'next/navigation';

const stripeLoadedPromise = loadStripe(
  'pk_test_51NoptQIF5Ewa0z1weAgAPPKYRio4rkIbNTYPuRPlXd3OdWsMaceCjCMNETTJSXp9yVsXpx6whtH8W4r0LGAIZ86L00YKiIUNvJ'
);

type Cart = {
  id: number;
  image: string;
  name: string;
  price: string;
  color: string;
  size: string;
  imgUrl: string;
  quantity: number;
};

export default function CartModal({ cart }: { cart: Cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // convert object of objects to an array
  const arr: any[] = Object.entries(cart).map(([key, value]) => value);

  const quantity = arr.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = arr.reduce(
    (total, product) =>
      total + Number.parseInt(product.price, 10) * product.quantity,
    0
  );

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  async function handleCheckout() {
    const stripe = await loadStripe(
      'pk_test_51NoptQIF5Ewa0z1weAgAPPKYRio4rkIbNTYPuRPlXd3OdWsMaceCjCMNETTJSXp9yVsXpx6whtH8W4r0LGAIZ86L00YKiIUNvJ'
    );
    try {
      const res = await stripe?.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1NoqkFIF5Ewa0z1w7Z8726pR',
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: `${pathname}`,
        cancelUrl: `${pathname}`,
      });
      console.log(res?.error);
    } catch (error) {
      throw 'Error wrong API key...';
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openCart}
        className="relative flex text-slate-500 p-2 border rounded border-slate-300 group"
      >
        <CartIcon className="w-5 h-5 group-hover:scale-105 transition-transform" />
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
              <button
                type="button"
                onClick={closeCart}
                className="flex text-slate-500 p-2 border rounded border-slate-300"
              >
                <CloseIcon className="h-5 hover:scale-105 transition-all" />
              </button>
            </div>
            {arr.length === 0 ? (
              <div className="mt-20 w-full flex flex-col items-center justify-center">
                <CartIcon className="h-16 " />
                <p className="mt-6 text-2xl font-bold">Your cart is empty.</p>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-between overflow-hidden p-1">
                <ul className="flex-grow py-4 overflow-auto">
                  {arr.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="w-full flex flex-col border-b border-slate-300"
                      >
                        <div className="relative flex flex-row justify-between px-1 py-4">
                          <div className="absolute z-40 -mt-2 ml-[55px]">
                            <DeleteItem id={item.id} />
                          </div>
                          <Link
                            href={item.imgUrl}
                            className="flex flex-row space-x-4 overflow-hidden group"
                          >
                            <div className="border rounded-md border-slate-300">
                              <Image
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                                src={item.image}
                                alt={item.name}
                                width={64}
                                height={64}
                              />
                            </div>
                            <div className="flex flex-1 flex-col justify-center">
                              <h3 className="text-sm">{item.name}</h3>
                              <p className="text-xs">
                                {item?.color}{' '}
                                {item?.size && (
                                  <span className="uppercase">
                                    / {item?.size}
                                  </span>
                                )}
                              </p>
                            </div>
                          </Link>
                          <div className="flex flex-col items-end justify-center">
                            <p className="text-sm">${item.price} USD</p>
                            <div className="flex items-center border rounded-full mt-1">
                              <EditItemQuantity item={item} type="minus" />
                              <p className="text-sm px-1">{item.quantity}</p>
                              <EditItemQuantity item={item} type="plus" />
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="py-4 text-sm">
                  <div className="flex items-center justify-between border-b border-slate-300 mb-3 pb-1">
                    <p>Taxes</p>
                    <p>$0.00 USD</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-300 mb-3 pb-1">
                    <p>Shipping</p>
                    <p>Calculated at checkout</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-300 mb-3 pb-1">
                    <p>Total</p>
                    <p>${totalPrice.toFixed(2)} USD</p>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full rounded-full p-3 text-center font-medium text-sm text-white bg-blue-500"
                >
                  Procced to Checkout
                </button>
              </div>
            )}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
