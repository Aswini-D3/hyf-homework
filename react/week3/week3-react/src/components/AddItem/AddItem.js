import React, { Component } from "react";
import "./AddItem.css";
import Border from "../Border";
class AddItem extends Component {
  state = {
    description: "",
    when: "",
  };
  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    if (e.target.description.value === "") {
      this.props.addItem({ description: "random text", when: "random" });
    } else {
      this.props.addItem(this.state);
      this.setState({
        description: "",
        when: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <span className="description list-item">
          <input
            type="text"
            placeholder="Enter Todo description"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            required
          ></input><br></br>
          </span>
          <input
            type="date"
            placeholder="Enter date and year"
            id="when"
            onChange={this.handleChange}
            value={this.state.when}
            required
          ></input><br></br>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    );
  }
}

export default AddItem;
