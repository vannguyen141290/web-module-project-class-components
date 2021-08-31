import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Search from './components/Search'

const todoList = [
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
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList,
      searchTerm: ''
    }
  }

  add = (inputValues) => {
    const newTodo = {
      task: inputValues,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todoList: [ ...this.state.todoList, newTodo ]
    })
  }

  toggle = (id) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if(item.id === id){
          return ({...item, completed: !item.completed})
        } else {
          return (item)
        }
      })
    })
  }

  delete = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return (item.completed === false)
      })
    })
  }

  render() {
    const {todoList, searchTerm} = this.state
    const filteredList = todoList.filter(item => (
      item.task.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm add={this.add} delete={this.delete} />
        <Search handleChange={e => this.setState({searchTerm: e.target.value})} />
        <TodoList todoList={filteredList} toggle={this.toggle}/>
      </div>
    );
  }
}

export default App;
