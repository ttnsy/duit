"use client";

export const CreateItem = () => {
  return (
    <div>
      <form action="">
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
          <label htmlFor="budget">Budget</label>
          <input type="number" name="budget" id="budget" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};
