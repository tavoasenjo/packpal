import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setItem((item) => ({
      ...item,
      [e.target.name]: e.target.name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name: item.name,
      quantity: item.quantity,
      packed: false,
    };

    if (!item.name) return;

    console.log("submit!!!!!");
    addItem(newItem);
    setItem({
      name: "",
      quantity: 1,
    });
  };

  return (
    <section className='bg-tertiary flex justify-center flex-col items-center py-10'>
      <h2 className='text-2xl text-text font-bold'>Add New Item</h2>
      {/* Modal????? */}
      <form
        onSubmit={handleSubmit}
        className='flex w-2/3 flex-col gap-4 justify-center items-center'>
        <input
          type='text'
          onChange={(e) => handleOnChange(e)}
          placeholder='item name'
          name='name'
          value={item.name}
          className='border-2 w-full rounded-md border-secondary text-center placeholder:text-center placeholder:text-slate-400 placeholder:text-xl py-2 px-4'
        />
        <div>
          <label htmlFor='quantity-select'>Quantity:</label>
          <select
            onChange={(e) => handleOnChange(e)}
            id='quantity-select'
            value={item.quantity}
            name='quantity'>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button className='rounded-md py-2 px-6 bg-amber-300'>Add</button>
      </form>
    </section>
  );
};

export default AddItem;
