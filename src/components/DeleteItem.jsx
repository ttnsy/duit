"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoTrashOutline } from "react-icons/io5";
import toast from "react-hot-toast";

import { deleteData } from "@/lib/fetchAPI";

export const DeleteItem = ({ item }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  function handleChange() {
    setModal(!modal);
  }

  async function handleDelete() {
    try {
      await deleteData(item._id);

      setModal(false);
      toast.success(`${item.category} removed from budget list.`)
      router.refresh();
    } catch (error) {
      toast.error(error.message)
    }
  }
  const modalTitle = `Delete ${item.category} from budget list?`

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        <IoTrashOutline size={20} />
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3>{modalTitle}</h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
