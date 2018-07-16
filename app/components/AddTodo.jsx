var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault()
    var {dispatch} = this.props;

    var todoText = this.refs.todo.value

    if (todoText.trim() !== '' && typeof todoText === 'string'){
      this.refs.todo.value = ''
      // this.props.onAddTodo(todo)
      dispatch(actions.startAddTodo(todoText))
    }else{
      this.refs.todo.focus()
    }


  },
  render: function(){
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addto-form">
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded" >Add Todo</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddTodo)

// module.exports = AddTodo
