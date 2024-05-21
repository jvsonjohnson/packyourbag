/* eslint-disable react/prop-types */
import Counter from "./Counter";

function Header({ totalItems, totalItemsPacked }) {
  return (
    <header>
      {" "}
      <Counter
        totalItemsPacked={totalItemsPacked}
        totalItems={totalItems}
      ></Counter>{" "}
    </header>
  );
}

export default Header;
