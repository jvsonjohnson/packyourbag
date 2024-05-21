/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (itemText === "") {
          inputRef.current.focus();
          return;
        }

        handleAddItem(itemText);
        setItemText("");
      }}
    >
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
