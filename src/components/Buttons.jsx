"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export const EditButton = () => {
  return (
    <Link href="/create" className="rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }) => {
  async function handleDelete() {
    fetch("https://v1.appbackend.io/v1/rows/dA6u4jpqjVHH", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
  }

  return (
    <button onClick={handleDelete}>
      <IoTrashOutline size={20} />
    </button>
  );
};

export const BackButton = () => {
  return <Link href="/">Back</Link>;
};
