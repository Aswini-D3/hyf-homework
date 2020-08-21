import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items } = props;
  const { deletedItem, completedItem, editItem, handleChange } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div className="ListItems" key={item.id}>
          <span
            className={
              item.completed //checking whether todo item completed then marking it completed by striking line
                ? "description list-item completed"
                : "description list-item"
            }
          >
            {item.editing ? ( //check if todo item enabled for editing if true display input box for updating text otherwise display text description
              <input
                type="text"
                placeholder="Enter Todo description"
                id="description"
                onChange={(e) => handleChange(item.id, e)}
                value={item.description}
                required
              ></input>
            ) : (
              item.description
            )}
          </span>
          <span
            className={
              item.completed ? "when list-item completed" : "when list-item"
            }
          >
            {item.editing ? ( //check if todo item enabled for editing if true display input box for updating text otherwise display text description
              <input
                type="text"
                placeholder="Enter time and date"
                id="when"
                onChange={(e) => handleChange(item.id, e)}
                value={item.when}
                required
              ></input>
            ) : (
              item.when
            )}


          </span>
          <span class="action icon">
            <input
              type="checkbox"
              checked={item.completed ? "checked" : ""}
              onClick={() => completedItem(item.id)}
            />
          </span>
          <span
            class="action button"
            onClick={() =>
              editItem(item.id, item.editing, "new description", "new time")
            }
          >
            {item.editing ? "Update" : "Edit"}
          </span>
          <span
            className="action delete-item button"
            onClick={() => deletedItem(item.id)}
          >
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>There are no ToDo's</p>
  );
  return (
    <div>
      <div className="ListItems">
        <span className="description title">Description</span>
        <span className="when title">When</span>
        <span className="action title">Status</span>
        <span className="action title">Edit</span>
        <span className="action title">Delete</span>
      </div>

      {ListItems}
    </div>
  );
};

export default TodoItems;
