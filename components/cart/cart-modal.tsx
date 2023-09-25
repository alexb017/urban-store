'use client';

import { Dialog, Transition } from '@headlessui/react';
import CartIcon from '../icons/cart';
import { useState, Fragment, useEffect, useRef } from 'react';
import CloseIcon from '../icons/close';
import Link from 'next/link';
import Image from 'next/image';
import DeleteItem from './delete-item';
import EditItemQuantity from './edit-item';
import { loadStripe } from '@stripe/stripe-js';

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
  priceId: string;
  unique_id: string;
};

export default function CartModal({ cart }: { cart: Cart[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const refModal = useRef(cart.length);

  useEffect(() => {
    // Open cart modal when quantity changes
    if (cart.length !== refModal.current) {
      // But only if it's not already open
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      refModal.current = cart.length;
    }
  }, [cart, refModal, isOpen]);

  const quantity = cart.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cart.reduce(
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
    const stripe = await stripeLoadedPromise;

    const lineItems = cart.map((item) => {
      return { price: item.priceId, quantity: item.quantity };
    });

    try {
      await stripe?.redirectToCheckout({
        lineItems: lineItems,
        mode: 'payment',
        successUrl: `https://urban-store-alexb017.vercel.app/`,
        cancelUrl: `https://urban-store-alexb017.vercel.app/`,
      });
    } catch (error) {
      throw 'Error wrong api key...';
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openCart}
        className="relative flex text-neutral-500 p-2 border rounded border-neutral-200 group dark:border-neutral-700 dark:text-neutral-200"
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
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 bottom-0 flex flex-col w-full h-full bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:text-neutral-200 dark:bg-black/80">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">My Cart</h3>
                <button
                  type="button"
                  onClick={closeCart}
                  className="flex text-neutral-500 p-2 border rounded border-neutral-200 dark:text-neutral-200 dark:border-neutral-700"
                >
                  <CloseIcon className="h-5 hover:scale-105 transition-all" />
                </button>
              </div>
              {cart.length === 0 ? (
                <div className="mt-20 w-full flex flex-col items-center justify-center">
                  <CartIcon className="h-16 " />
                  <p className="mt-6 text-2xl font-bold">Your cart is empty.</p>
                </div>
              ) : (
                <div className="h-full flex flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow py-4 overflow-auto">
                    {cart.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="w-full flex flex-col border-b border-neutral-200 dark:border-neutral-700"
                        >
                          <div className="relative flex flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteItem id={item.unique_id} />
                            </div>
                            <Link
                              href={item.imgUrl}
                              className="flex flex-row space-x-4 overflow-hidden group"
                            >
                              <div className="border rounded-md border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950">
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
                              <div className="flex items-center border rounded-full mt-1 border-neutral-200 dark:border-neutral-700">
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
                    <div className="flex items-center justify-between border-b border-neutral-200 mb-3 pb-1 dark:border-neutral-700">
                      <p>Taxes</p>
                      <p>$0.00 USD</p>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-200 mb-3 pb-1 dark:border-neutral-700">
                      <p>Shipping</p>
                      <p>Calculated at checkout</p>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-200 mb-3 pb-1 dark:border-neutral-700">
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
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
