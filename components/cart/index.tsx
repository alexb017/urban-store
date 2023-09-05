import CartModal from './cart-modal';

export default async function Cart() {
  const res = await fetch(
    'https://urban-store-2da52-default-rtdb.europe-west1.firebasedatabase.app/productsCart.json',
    { cache: 'no-store' }
  );
  const data: any = (await res.json()) || [];

  return <CartModal cart={data} />;
}
