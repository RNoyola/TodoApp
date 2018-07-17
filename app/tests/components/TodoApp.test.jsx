var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')
var {Provider} = require('react-redux')

var configureStore = require('configureStore')
import TodoList from 'TodoList'
import {TodoApp} from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should render TodoList', () => {
    var store = configureStore.configure()
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    )
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })

  // it('should add todo to the todos state and handleAddTodo', () => {
  //   var todoText = 'Test text'
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
  //
  //   todoApp.setState({todos: []})
  //   todoApp.handleAddTodo(todoText)
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText)
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number')
  //
  // })

  // it('should toggle completed value when handleToggle called', ()=>{
  //   var todoData = {
  //     id:11,
  //     text:'adsasd',
  //     completed:false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   }
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />)
  //   todoApp.setState({todos:[todoData]})
  //
  //   expect(todoApp.state.todos[0].completed).toBe(false)
  //   todoApp.handleToggle(todoApp.state.todos[0].id)
  //   expect(todoApp.state.todos[0].completed).toBe(true)
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number')
  // })

  // it('should remove completedAt when togle from true to false', ()=>{
  //   var todoData = {
  //     id:11,
  //     text:'adsasd',
  //     completed:true,
  //     createdAt: 0,
  //     completedAt: 12541841651
  //   }
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />)
  //   todoApp.setState({todos:[todoData]})
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true)
  //   todoApp.handleToggle(todoApp.state.todos[0].id)
  //   expect(todoApp.state.todos[0].completed).toBe(false)
  //   expect(todoApp.state.todos[0].completedAt).toBe(undefined)
  // })



})
