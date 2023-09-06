'use client';

import { useRouter } from 'next/navigation';
import MinusIcon from '../icons/minus';
import PlusIcon from '../icons/plus';

export default function EditItemQuantity({
  item,
  type,
}: {
  item: any;
  type: 'plus' | 'minus';
}) {
  const router = useRouter();

  async function editItem(item: any) {
    const quantity =
      type === 'plus'
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item, quantity: item.quantity - 1 };

    if (item.quantity === 1 && type === 'minus') return;

    try {
      const res = await fetch(
        `https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsCart/id${item.id}.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(quantity),
        }
      );

      if (!res.ok) {
        throw new Error('Request failed');
      }
    } catch (error) {
      throw 'Error updating item quantity';
    }

    router.refresh();
  }

  return (
    <button className="p-2" onClick={() => editItem(item)}>
      {type === 'plus' ? (
        <PlusIcon className="w-4 h-4" />
      ) : (
        <MinusIcon className="w-4 h-4" />
      )}
    </button>
  );
}
