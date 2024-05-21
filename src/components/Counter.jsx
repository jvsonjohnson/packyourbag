/* eslint-disable react/prop-types */
function Counter({ totalItems, totalItemsPacked }) {
  return (
    <p>
      <b>{totalItemsPacked} </b>/ {totalItems} items packed
    </p>
  );
}

export default Counter;
