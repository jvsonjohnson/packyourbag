/* eslint-disable react/prop-types */

import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

function ItemList({ items, deleteItem, toggleItem }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "default") {
          return a.id - b.id;
        } else if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortOptions}
            defaultValue={sortOptions[0]}
          ></Select>
        </section>
      )}
      {sortedItems.map((item, index) => {
        return (
          <Item
            key={index}
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item, deleteItem, toggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          onChange={() => toggleItem(item.id)}
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
