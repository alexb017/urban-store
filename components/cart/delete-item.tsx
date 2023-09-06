'use client';

import { useRouter } from 'next/navigation';
import CloseIcon from '../icons/close';

export default function DeleteItem({ id }: { id: string }) {
  const router = useRouter();

  async function deleteItem(id: string) {
    try {
      const res = await fetch(
        `https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsCart/id${id}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!res.ok) {
        throw new Error('Request failed');
      }
    } catch (error) {
      throw 'Error removing item from cart';
    }

    router.refresh();
  }
  return (
    <button onClick={() => deleteItem(id)}>
      <CloseIcon className="h-4 bg-neutral-200 p-0.5 rounded-full" />
    </button>
  );
}
