import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItem";
import Timer from "./components/Timer";
import Border from "./components/Border";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        description: "Get out of bed",
        when: " Wed Sep 13 2017",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        description: "Brush teeth",
        when: " Thu Sep 14 2017",
        completed: false,
        editing: false,
      },
      {
        id: 3,
        description: "Eat breakfast",
        when: " Fri Sep 15 2017",
        completed: false,
        editing: false,
      },
    ],
  };
  handleChange = (id,e)=> {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        return { ...item, [e.target.id]: e.target.value, };
      }
      return item;
    });
    this.setState({items})
  }
  editItem = (id, editingMode) => {

    if (editingMode) {
      const items = this.state.items.map((item) => {
        if (id === item.id) {
          return {
            ...item, editing: false,
          };
        }
        return item;
      });
      this.setState({ items });
      console.log("Todo updated")
    } else {
      const items = this.state.items.map((item) => {
        if (id === item.id) {
          return { ...item, editing: true };
        }
        return item;
      });
      this.setState({ items });
      console.log("Editing mode enabled");
    }
  };

  deletedItem = (id) => {
    //console.log(id);
    /*let items = this.state.items;
    let i = items.findIndex(item=>item.id===id);
    items.splice(i,1);
    this.setState({items});*/
    // let items = this.state.items.filter(item =>{
    //   return item.id !== id
    // });
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  completedItem = (id) => {
    //console.log(id);
    /*let items = this.state.items;
    let i = items.findIndex(item=>item.id===id);
    items.splice(i,1);
    this.setState({items});*/
    // let items = this.state.items.filter(item =>{
    //   return item.id !== id
    // });
    let items = this.state.items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <Border>
          <h1 className="text-center">TO DO LIST</h1>
          <Timer />
          <br />
          <div className="Items-List">
            <TodoItems
              items={this.state.items}
              deletedItem={this.deletedItem}
              editItem={this.editItem}
              completedItem={this.completedItem}
              handleChange={this.handleChange}
            />
          </div>
          <br />
          <h2 className="Add-Todo">Add To Do</h2>
          <AddItem addItem={this.addItem} />
          <Footer>
          </Footer>
          
        </Border>
      </div>
    );
  }
}

export default App;
