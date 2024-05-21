/* eslint-disable react/prop-types */
import Button from "./Button";

function ButtonGroup({
  removeAllItems,
  resetToInitial,
  markAllAsComplete,
  markAllAsInComplete,
}) {
  return (
    <section className="button-group">
      <Button type="secondary" onClick={markAllAsComplete}>
        Mark all as complete
      </Button>
      <Button type="secondary" onClick={markAllAsInComplete}>
        Mark all as incomplete
      </Button>
      <Button type="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button type="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
