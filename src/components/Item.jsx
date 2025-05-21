// import { useState } from "react";
import { removeIcon } from "../assets/icons.jsx";

const Item = ({ item, removeItem, updateItem }) => {
  // const [packed, setPacked] = useState(false);
  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  return (
    <li
      key={item.id}
      className='border-b-3 w-full sm:w-auto border-secondary py-2 px-4 flex items-center justify-between gap-4'>
      <input
        value={item.packed}
        type='checkbox'
        className='border-4 border-secondary accent-amber-300 w-6 h-6 rounded-md'
        onChange={() => updateItem(item.id)}
      />
      <span
        className={`flex items-center gap-3 text-xl sm:text-3xl font-bold font-body uppercase ${
          item.packed ? "line-through text-slate-500" : ""
        }`}>
        <span className='text-center flex justify-center items-center text-xl w-8 h-8 rounded-full border-1'>
          {item.quantity}
        </span>{" "}
        {item.name}
      </span>
      <button
        onClick={() => handleRemoveItem(item.id)}
        className='ml-2 text-red-400'>
        {removeIcon}
      </button>
    </li>
  );
};

export default Item;
