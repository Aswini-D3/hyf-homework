import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items } = props;
  const { deleteItem } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div className="ListItems" key={item.id}>
          <span
            className={
              item.completed
                ? "description list-item completed"
                : "description list-item"
            }
          >
            {item.description}
          </span>
          <span
            className={
              item.completed ? "when list-item completed" : "when list-item"
            }
          >
            {item.when}
          </span>
          <span
            className="action icon delete-item"
            onClick={() => deleteItem(item.id)}
          >
            &times;
          </span> 
          <span class="action icon delete-item">
            <input type="checkbox" checked={item.completed ? "checked" : ""} onClick={() => deleteItem(item.id)} />
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
        <span className="action title">Action</span>
      </div>
      {ListItems}
    </div>
  );
};

export default TodoItems;
