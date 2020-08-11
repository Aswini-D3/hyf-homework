import * as React from "react";
import "./style.css";
function Todolist(props) {
  return (
    <div className="todo-card">
      <img src={props.banner} />
      <label>
          {props.task}{props.when}
      </label>

    </div>
  );
}
export default Todolist;
