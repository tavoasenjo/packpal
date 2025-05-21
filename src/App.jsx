import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import ResetItems from "./components/ResetItems";
import ScrollToTopButton from "./components/ScrollToTop";
import { useState, useRef } from "react";

const App = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const scrollRef = useRef(null);

  const addItem = (newItem) => {
    setItems((prev) => {
      const updatedItems = [newItem, ...prev];
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeItem = (id) => {
    // console.log("remove item");
    setItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const updateItem = (id) => {
    // console.log("update item");
    setItems((prev) => {
      const updatedItems = prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const resetList = () => {
    localStorage.setItem("items", JSON.stringify([]));
    setItems([]);
  };

  return (
    <div
      ref={scrollRef}
      className='font-body bg-background h-dvh overflow-auto'>
      <Header />
      <AddItem addItem={addItem} />
      {items.length !== 0 && <ResetItems resetList={resetList} />}
      <main>
        <ListItems
          items={items}
          removeItem={removeItem}
          updateItem={updateItem}
        />
        {/* <ScrollToTopButton scrollRef={scrollRef} /> */}
      </main>
    </div>
  );
};

export default App;
