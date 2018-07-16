var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

import * as actions from 'actions'
var {AddTodo} = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should dispatch ADD_TODO when todo text is entered', () => {
    var todoText = 'Feed the fish';
    var action = actions.startAddTodo(todoText)
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

   addTodo.refs.todo.value = todoText;
   TestUtils.Simulate.submit($el.find('form')[0]);

   expect(spy).toHaveBeenCalledWith(action);
  })

  it('should not dispatch ADD_TODO when invalid text is entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

   expect(spy).toNotHaveBeenCalled();
  })
})
