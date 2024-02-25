"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoAddSharp } from "react-icons/io5";
import toast from "react-hot-toast";

import { postData } from "@/lib/fetchAPI";

export const CreateItem = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const [group, setGroup] = useState("bills");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");

  function handleChange() {
    setModal(!modal);
  }

  async function handleCreateItem(e) {
    e.preventDefault();

    try {
      const formData = { group, category, budget_plan: budget };
      postData(formData);

      setCategory("");
      setBudget("");
      router.refresh();
      setModal(false);
      
      toast.success(`${budget} allocated to ${category}`);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <button className="create-btn" onClick={handleChange}>
        <IoAddSharp size={20} />
        New Allocation
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3>Allocate budget</h3>
          <form method="post" onSubmit={handleCreateItem}>
            <div className="form-control">
              <select
                name="group"
                id="group"
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
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button type="submit" className="create-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
