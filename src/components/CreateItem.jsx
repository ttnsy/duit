"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateItem = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const [group, setGroup] = useState("Bills");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");

  function handleChange() {
    setModal(!modal);
  }

  function handleCreateItem(e) {
    e.preventDefault();

    const formData = { group, category, budget_plan: budget };

    fetch("https://v1.appbackend.io/v1/rows/dA6u4jpqjVHH", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([formData]),
    });

    setCategory("");
    setBudget("");
    router.refresh();
    setModal(false);
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Add New
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
                className="select select-bordered w-full max-w-xs"
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
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="budget_plan">
                Budget
              </label>
              <input
                type="number"
                name="budget_plan"
                id="budget_plan"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button type="submit" className="btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
