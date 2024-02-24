"use client";

import Link from "next/link";
import { IoAddSharp, IoPencil } from "react-icons/io5";

export const EditButton = () => {
  return (
    <Link href="/create" className="rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
};

export const BackButton = () => {
  return <Link href="/">Back</Link>;
};
