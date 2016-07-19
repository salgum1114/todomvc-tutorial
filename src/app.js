'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var TodoItem = require('./component/todoitem');
var Footer = require('./component/footer');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = HashHistory || require('react-router').hashHistory;
var ENTER_KEY = 13;

var Main = React.createClass({
    getInitialState: function() {
        return {
            todos: [],
            newTodo: '',
            count: 0
        };
    },
    handleNewTodoKeyDown: function(event) {
        if(event.keyCode !== ENTER_KEY) {
            return;
        }
        event.preventDefault();
        var nextTodo = this.state.todos.concat([this.state.newTodo]);
        this.setState({todos: nextTodo});
        this.setState({count: ++this.state.count});
        this.setState({newTodo: ''});
    },
    handleChange: function(event) {
        this.setState({newTodo: event.target.value});
    },
    render: function() {
        var ulStyle = {
            listStyle: 'none'
        };
        var createTodo = function(todo) {
            return (
                <TodoItem key={todo.id} todo={todo}/>
            );
        };
        var todoList = (
            <ul style={ulStyle}>
                {this.state.todos.map(createTodo)}
            </ul>
        );

        var footer = <Footer count={this.state.count} />;
        
        return (
            <div>
                <header>
                    <h1>todos</h1>
                    <input value={this.state.newTodo} onKeyDown={this.handleNewTodoKeyDown} onChange={this.handleChange} placeholder="What needs to be done?" autoFocus={true} />
                </header>
                {todoList}
                {footer}
            </div>
        );
    }
});

ReactDom.render(<Main />, document.getElementById("todoapp"));