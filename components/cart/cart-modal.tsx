"use client";

import { Dialog, Transition } from "@headlessui/react";
import CartIcon from "../icons/cart";
import { useState } from "react";
import CloseIcon from "../icons/close";

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const quantity = 0;

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
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
