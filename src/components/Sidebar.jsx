/* eslint-disable react/prop-types */
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddItem,
  removeAllItems,
  resetToInitial,
  markAllAsComplete,
  markAllAsInComplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem}></AddItemForm>

      <ButtonGroup
        removeAllItems={removeAllItems}
        resetToInitial={resetToInitial}
        markAllAsComplete={markAllAsComplete}
        markAllAsInComplete={markAllAsInComplete}
      ></ButtonGroup>
    </div>
  );
};

export default Sidebar;
