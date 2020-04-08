import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';




const todos = [
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
         todos: todos
      };
    }
  
    addItem = (item) => {
      const newItem = {
        task: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newItem]
      });
    };

    toggleItem = itemId => {
      console.log(itemId);
      // map over array
      // when we find the item we clicked, toggle the purchased field
      // otherwise return the item untouched
      this.setState({
        todos: this.state.todos.map(item => {
          if (itemId === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      });
    };
  
    clearPurchased = () => {
      // if item is purchased (item.purchased is true) then filter out
      this.setState({
        todos: this.state.todos.filter(item => !item.completed)
      });
    };
  
    render() {
      console.log(this.state.todos);
      return (
        <div>
            <h1>Todo List</h1>
          <TodoList
            task={this.state.todos}
            toggleItem={this.toggleItem}
            clearTodos={this.clearPurchased}
          />
            <TodoForm addItem={this.addItem} />
        
        </div>
      );
    }
}

export default App;
