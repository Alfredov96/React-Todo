import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';



const Todo = [
  {
    task: 'Organize Garage',
  id: 1528817077286,
  completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
    constructor() {
      super();
      this.state = {
         todoList: Todo
      };
    }
  
    addItem = (e, item) => {
      e.preventDefault();
      const newItem = {
        task: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        groceries: [...this.state.groceries, newItem]
      });
    };

    toggleItem = itemId => {
      console.log(itemId);
      // map over array
      // when we find the item we clicked, toggle the purchased field
      // otherwise return the item untouched
      this.setState({
        todoList: this.state.TodoList.map(item => {
          if (itemId === item.id) {
            return {
              ...Todo,
              completed: !item.completed
            };
          }
          return item;
        })
      });
    };
  
    clearPurchased = e => {
      e.preventDefault();
      // if item is purchased (item.purchased is true) then filter out
      this.setState({
        Todos: this.state.filter(item => !item.completed)
      });
    };
  
    render() {
      console.log('rendering...');
      return (
        <div className="App">
          <div className="header">
            <h1>Todo List</h1>
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            completed={this.state.Todos}
            toggleItem={this.toggleItem}
            clearPurchased={this.clearPurchased}
          />
        </div>
      );
    }
}

export default App;
