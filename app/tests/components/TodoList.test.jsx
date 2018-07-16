var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')
var {Provider} = require('react-redux')

// var TodoList = require('TodoList')
import {configure} from 'configureStore'
import ConnectedToDoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'
// var Todo = require('Todo')
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id:1,
        text: 'Do somenthing',
        completed: false,
        completedAt: undefined,
        createdAt:500
      },{
        id:2,
        text: 'check mail',
        completed: false,
        completedAt: undefined,
        createdAt:500
      }
    ]
    var store = configure({
      todos
    })
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    // var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedToDoList)[0]
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo)

    expect(todoComponents.length).toBe(todos.length)
  })

  it('should renderempty message if not todos', () => {
    var todos = []
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    var $el = $(ReactDOM.findDOMNode(todoList))

    expect($el.find('.container__message').length).toBe(1)
  })

})
