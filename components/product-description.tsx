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
      <div className="mb-6 flex flex-col border-b border-slate-300 pb-6">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <div className="text-sm rounded-full py-1 px-2 mr-auto text-white bg-blue-500">
          ${product.price} USD
        </div>
      </div>
      {product?.color?.length > 1 && (
        <div>
          <h3 className="uppercase mb-1">color</h3>
          <div className="flex items-center gap-2">
            {product?.color?.map((color) => {
              const classname =
                'text-sm border rounded-full border-slate-300 py-1 px-2 bg-slate-200 hover:border-blue-500';
              return (
                <button
                  key={color}
                  type="button"
                  className={
                    colorValue ? `${classname} border-blue-500` : `${classname}`
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
      {product?.size?.length > 1 && (
        <div className="my-6">
          <h3 className="uppercase mb-1">size</h3>
          <div className="flex items-center flex-wrap gap-2">
            {product?.size?.map((size) => {
              return (
                <button
                  key={size}
                  type="button"
                  className="text-sm uppercase border rounded-full border-slate-300 py-1 px-4 bg-slate-200 hover:border-blue-500"
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <p className="text-sm my-4">{product.details}</p>
      <AddToCart />
    </>
  );
}
