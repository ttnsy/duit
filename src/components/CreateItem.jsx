"use client";

import { BackButton } from "./Buttons";

export const CreateItem = () => {
  function handleCreateItem(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    fetch("https://v1.appbackend.io/v1/rows/dA6u4jpqjVHH", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([formJson]),
    });
  }

  return (
    <div>
      <div className="mb-10">
        <BackButton />
      </div>
      <form method="post" onSubmit={handleCreateItem}>
        <div className="mb-5">
          <select name="group" id="group">
            <option value="bills">Bills</option>
            <option value="needs">Needs</option>
            <option value="wants">Wants</option>
            <option value="gifts">Gifts</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="category">Category</label>
          <input type="text" name="category" id="category" />
        </div>
        <div className="mb-5">
          <label htmlFor="budget_plan">Budget</label>
          <input type="number" name="budget_plan" id="budget_plan" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};
