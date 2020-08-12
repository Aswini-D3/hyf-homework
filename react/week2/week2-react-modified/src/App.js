import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import Timer from './components/Timer';

import './App.css';

class App extends Component {
  state = {
    items: [
      {id: 1, description: 'Get out of bed', when: ' Wed Sep 13 2017', completed : false},
      {id: 2, description: 'Brush teeth', when: ' Thu Sep 14 2017', completed: false},
      {id: 3, description: 'Eat breakfast', when: ' Fri Sep 15 2017', completed: false}
    ]
  }

  deletedItem =(id)=>{
    //console.log(id);
    /*let items = this.state.items;
    let i = items.findIndex(item=>item.id===id);
    items.splice(i,1);
    this.setState({items});*/
    // let items = this.state.items.filter(item =>{
    //   return item.id !== id
    // });
    let items = this.state.items.filter(item =>{
      return item.id !== id
    });
    this.setState({items})

}
  completedItem =(id)=>{
    //console.log(id);
    /*let items = this.state.items;
    let i = items.findIndex(item=>item.id===id);
    items.splice(i,1);
    this.setState({items});*/
    // let items = this.state.items.filter(item =>{
    //   return item.id !== id
    // });
    let items = this.state.items.map(item =>{
      if(item.id === id){
        return{...item, completed : !item.completed}
      }
      return item
    });
    this.setState({items})

}

addItem = (item)=>{
  item.id = Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items})
}
  render(){
  return (
    <div className="App container"> 
      <h1 className="text-center">TO DO LIST</h1>
      <Timer />
      <br/>
      <div className="Items-List">
      <TodoItems items = {this.state.items} deletedItem={this.deletedItem} completedItem={this.completedItem}/>
      </div>
      <br/>
      <AddItem addItem = {this.addItem} />
    </div>
  );
  }
}

export default App;
