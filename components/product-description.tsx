'use client';

import { useState } from 'react';
import AddToCart from './cart/add-to-cart';

type Product = {
  id: number;
  name: string;
  price: string;
  color: string[];
  size: string[];
  details: string;
};

export default function ProductDescription({ product }: { product: Product }) {
  const [colorValue, setColorValue] = useState('');
  const [sizeValue, setSizeValue] = useState('');

  return (
    <>
      <div className="mb-6 flex flex-col border-b border-neutral-300 pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <div className="text-sm rounded-full py-1 px-2 mr-auto text-white bg-blue-500">
          ${product.price} USD
        </div>
      </div>
      {product?.color?.length > 0 && (
        <div>
          <h3 className="uppercase mb-1">color</h3>
          <div className="flex items-center gap-2">
            {product?.color?.map((color) => {
              const isActive = color === colorValue;
              const classname =
                'text-sm border rounded-full py-1 px-2 bg-neutral-200 hover:border-blue-500 hover:scale-105 transition-all dark:bg-neutral-800';
              return (
                <button
                  key={color}
                  type="button"
                  className={
                    isActive
                      ? `${classname} border-2 border-blue-500`
                      : `${classname} border-neutral-300 dark:border-neutral-700`
                  }
                  onClick={() => setColorValue(color)}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
      )}
      {product?.size?.length > 0 && (
        <div className="my-6">
          <h3 className="uppercase mb-1">size</h3>
          <div className="flex items-center flex-wrap gap-2">
            {product?.size?.map((size) => {
              const isActive = size === sizeValue;
              const classname =
                'text-sm uppercase border rounded-full py-1 px-4 bg-neutral-200 hover:border-blue-500 hover:scale-105 transition-all dark:bg-neutral-800';
              return (
                <button
                  key={size}
                  type="button"
                  className={
                    isActive
                      ? `${classname} border-2 border-blue-500`
                      : `${classname} border-neutral-300 dark:border-neutral-700`
                  }
                  onClick={() => setSizeValue(size)}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <p className="text-sm my-4">{product.details}</p>
      <AddToCart product={product} color={colorValue} size={sizeValue} />
    </>
  );
}
