"use client";

import { useState } from "react";

export const CreateItem = () => {
  const [modal, setModal] = useState(false);

  function handleChange() {
    setModal(!modal);
  }

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
              <select name="group" id="group">
                <option value="bills">Bills</option>
                <option value="needs">Needs</option>
                <option value="wants">Wants</option>
                <option value="gifts">Gifts</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="category">Category</label>
              <input type="text" name="category" id="category" />
            </div>
            <div className="form-control">
              <label htmlFor="budget_plan">Budget</label>
              <input type="number" name="budget_plan" id="budget_plan" />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button type="button" className="btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
