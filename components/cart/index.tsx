import CartModal from './cart-modal';

export default async function Cart() {
  let data: any;

  try {
    const res = await fetch(
      'https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsCart.json',
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error('Request failed');
    }

    data = (await res.json()) || [];
  } catch (error) {
    throw 'An error has occurred';
  }

  const arr: any = Object.entries(data).map(([key, value]) => ({
    unique_id: key,
    ...(value as any),
  }));

  return <CartModal cart={arr} />;
}
