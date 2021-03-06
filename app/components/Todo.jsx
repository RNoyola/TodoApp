var React = require('react')
var {connect} = require('react-redux')
var moment = require('moment')
var actions = require('actions')

export var Todo = React.createClass({
  render: function(){
    var {text,id, completed,createdAt, completedAt, dispatch} = this.props
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = () => {
      var message = 'Created '
      var timestamp = createdAt

      if(completed){
        var message = 'Completed '
        var timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('Do MMM YYYY @ h:mm a')
    }
    return (
      <div className={todoClassName} onClick={()=>{
          // this.props.onToggle(id)
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
})

export default connect()(Todo)
