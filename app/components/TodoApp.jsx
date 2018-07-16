var React = require('react')
var uuid = require('uuid')
var moment = require('moment')

// var TodoList = require('TodoList')
import TodoList from 'TodoList'
// var AddTodo = require('AddTodo')
import AddTodo from 'AddTodo'
// var TodoSearch = require('TodoSearch')
import TodoSearch from 'TodoSearch'
// var TodoAPI = require('TodoAPI')

var TodoApp = React.createClass({
// getInitialState:function (){
//     return {
//       showCompleted: false,
//       searchText: '',
//       todos: TodoAPI.getTodos()
//     }
//   },
  // componentDidUpdate: function (){
  //   TodoAPI.setTodos(this.state.todos)
  // },
  // handleAddTodo: function (text){
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed:false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   })
  // },
  // handleSearch:function (showCompleted, searchText){
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   })
  // },
  // handleToggle: function (id){
  //   var updatedTodos = this.state.todos.map((todo)=>{
  //     if(todo.id === id){
  //       todo.completed = !todo.completed
  //       todo.completedAt = todo.completed ? moment().unix() : undefined
  //     }
  //     return todo
  //   })
  //   this.setState({todos: updatedTodos})
  // },
  render: function (){
    // var {todos, showCompleted, searchText} = this.state
    // var filteredTodos = TodoAPI.filterTodos(todos,showCompleted, searchText)
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
