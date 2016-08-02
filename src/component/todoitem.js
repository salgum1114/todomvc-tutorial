var React = require('react');
var ReactDom = require('react-dom');

var classNames = require('classnames');
var TodoItem = React.createClass({
    displayName: 'TodoItem',
    getInitialState: function() {
        return {
            editTodo: this.props.todo,
            isEditing: false
        }
    },
    handleSubmit: function (event) {
        this.setState({isEditing: false});
	},
    handleEdit: function() {
        if(!this.state.isEditing) {
            this.setState({isEditing: true}); 
            this.setState({editTodo: this.state.editTodo});
        } else {
            this.setState({isEditing: false});
        }
    },
    handleChange: function(event) {
        if(this.state.isEditing) {
            this.setState({editText: event.target.value});
        } 
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
    componentDidUpdate: function(prevProps) {
        if(this.state.isEditing) {
            var editField = ReactDom.findDOMNode(this.refs.editField);
            editField.focus();
        }
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
                    onBlur={this.handleSubmit}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEditTodoKeyDown}
                    />
            </li>
        );
    }
});

module.exports = TodoItem;