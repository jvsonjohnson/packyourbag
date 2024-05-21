import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "passport",
    packed: false,
  },
  {
    id: 3,
    name: "charger",
    packed: false,
  },
];

function App() {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = { id: items.length + 1, name: newItemText, packed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const removeAllItems = () => {
    setItems([]);
  };

  const resetToInitial = () => {
    setItems(initialItems);
  };

  const markAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };
  const markAllAsInComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const toggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  let totalItems = items.length;

  let totalItemsPacked = items.filter((item) => item.packed).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading></BackgroundHeading>

      <main>
        <Header
          totalItems={totalItems}
          totalItemsPacked={totalItemsPacked}
        ></Header>
        <ItemList
          items={items}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        ></ItemList>
        <Sidebar
          handleAddItem={handleAddItem}
          removeAllItems={removeAllItems}
          resetToInitial={resetToInitial}
          markAllAsComplete={markAllAsComplete}
          markAllAsInComplete={markAllAsInComplete}
        ></Sidebar>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
