import Item from "./Item";

const ListItems = ({ items, removeItem, updateItem }) => {
  // return 'add a list of items' text if there is nothing to show
  if (items.length === 0)
    return (
      <h3 className='text-center text-2xl sm:text-4xl font-body w-full px-5 mt-7 sm:mt-14'>
        Start Adding Elements To Your List! 🤩
      </h3>
    );
  return (
    <ul className='mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center '>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </ul>
  );
};

export default ListItems;
