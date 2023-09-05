import MinusIcon from '../icons/minus';
import PlusIcon from '../icons/plus';

export default function EditItemQuantity({
  item,
  type,
}: {
  item: any;
  type: 'plus' | 'minus';
}) {
  return (
    <button className="p-2 ">
      {type === 'plus' ? (
        <PlusIcon className="w-4 h-4" />
      ) : (
        <MinusIcon className="w-4 h-4" />
      )}
    </button>
  );
}
