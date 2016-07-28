var React = require('react');
var ReactDom = require('react-dom');

var PropTypes = require('react').PropTypes;

var TodoItem = React.createClass({
    displayName: 'TodoItem',
    getInitialState: function() {
        return {
            editTodo: this.props.todo
        }
    },
    componentDidMount: function() {
        this.refs.editText.value = this.state.editTodo;
    },
    handleEdit: function() {
        this.setState({editTodo: this.state.editTodo});
    },
    handChange: function(event) {
        this.setState({editTodo: event.target.value});
    },
    render: function() {
        return (
            <li>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        onChange={this.props.completedCheck} 
                        checked={this.props.completed}/>
                    <label onDoubleClick={this.handleEdit}>
                        {this.props.todo}
                    </label>
                    <button className="destroy" onClick={this.props.deleteTodo}/>
                </div>
                <input 
                    ref="editText"
                    className="edit" 
                    defaultValue={this.state.editTodo} 
                    onChange={this.handleChange}/>
            </li>
        );
    }
});

module.exports = TodoItem;