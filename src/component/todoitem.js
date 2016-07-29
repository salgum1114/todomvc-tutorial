var React = require('react');
var ReactDom = require('react-dom');

var TodoItemEdit = require('./todoitemedit')
var classNames = require('classnames');
var TodoItem = React.createClass({
    displayName: 'TodoItem',
    getInitialState: function() {
        return {
            editTodo: this.props.todo,
            isEditing: false
        }
    },
    handleEdit: function() {
        if(!this.state.isEditing) {
            this.setState({isEditing: true}); 
            var editField = ReactDom.findDOMNode(this.refs.editField);
            editField.focus();
        }
        this.setState({editTodo: this.state.editTodo});
    },
    handleChange: function(event) {
        this.setState({editText: event.target.value});
    },
    handleEditTodoKeyDown: function(event) {
        if(event.which === 13) {
            var val = event.target.value;
            if(val) {
                this.setState({editTodo: event.target.value});
                this.setState({isEditing: this.handleCancel()});
            } else {
                this.props.deleteTodo();
            }
        } else if(event.which === 27) {
            this.setState({isEditing: this.handleCancel()});
        }
    },
    handleCancel: function() {
        this.setState({isEditing: false});
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return (
            nextProps.todo === this.state.editTodo ||
            nextState.editTodo === this.state.editTodo
        );
    },
    render: function() {
        return (
            <li className={classNames({
					completed: this.props.completed,
					editing: this.state.isEditing
				})}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        onChange={this.props.completedCheck} 
                        checked={this.props.completed}/>
                    <label onDoubleClick={this.handleEdit}>
                        {this.state.editTodo}
                    </label>
                    <button className="destroy" onClick={this.props.deleteTodo}/>
                </div>
                <input
                    ref="editField"
                    className="edit"
                    defaultValue={this.state.editTodo} 
                    onChange={this.handleChange}
                    onKeyDown={this.handleEditTodoKeyDown}
                    />
            </li>
        );
    }
});

module.exports = TodoItem;