import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export const AddButton = () => {
  return (
    <Link
      href="/create"
      className="inline-flex items-center px-2 py-1 rounded-lg text-white bg-indigo-500"
    >
      <IoAddSharp size={20} />
      Add
    </Link>
  );
};

export const EditButton = () => {
  return (
    <Link href="/create" className="rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = () => {
  return (
    <Link href="/create" className="rounded-sm border p-1 hover:bg-gray-100">
      <IoTrashOutline size={20} />
    </Link>
  );
};
