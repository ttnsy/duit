"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoPencil } from "react-icons/io5";

import toast from "react-hot-toast";

import { updateData } from "@/lib/fetchAPI";

export const EditItem = ({ item }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const [group, setGroup] = useState(item.group);
  const [category, setCategory] = useState(item.category);
  const [budget, setBudget] = useState(item.budget_plan);

  function handleChange() {
    setModal(!modal);
  }

  async function handleEdit(e) {
    e.preventDefault();

    try {
      const formData = { group, category, budget_plan: budget };
      await updateData(formData);

      router.refresh();

      setModal(false);
      toast.success(`${group} has updated!`);
    } catch (error) {
      setModal(false);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <button className="btn btn-sm" onClick={handleChange}>
        <IoPencil size={20} />
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3>{item.category}</h3>
          <form onSubmit={handleEdit}>
            <div className="form-control">
              <select
                name="group"
                id="group"
                className="select select-bordered w-full max-w-xs"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <option value="bills">Bills</option>
                <option value="needs">Needs</option>
                <option value="wants">Wants</option>
                <option value="gifts">Gifts</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                className="input input-bordered w-full max-w-xs"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="budget_plan">Budget</label>
              <input
                type="number"
                name="budget_plan"
                id="budget_plan"
                className="input input-bordered w-full max-w-xs"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                required
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
