'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var TodoItem = require('./component/todoitem');
var Footer = require('./component/footer');

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
        var newTodo = this.state.newTodo;
        var id = this.uuid();
        var newTodos = this.state.todos.concat({
            title: newTodo,
            id: id,
            completed: false
        });
        this.setState({todos: newTodos});
        this.setState({count: this.state.todos.length+1});
        this.setState({newTodo: ''});
    },
    handleChange: function(event) {
        this.setState({newTodo: event.target.value});
    },
    uuid: function () {
			/*jshint bitwise:false */
			var i, random;
			var uuid = '';

			for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
					.toString(16);
			}

			return uuid;
    },
    handleDeleteCompleted: function() {
        var newTodos = this.state.todos.filter(function(todo) {
            return !todo.completed; 
        });
        this.setState({
            todos: newTodos,
            count: newTodos.length
        });
    },
    handleDeleteTodo: function(todo) {
        var newTodos = this.state.todos.filter(function(candidate) {
            console.log("Test : ", candidate !== todo);
            return candidate !== todo;
        });
        this.setState({
            todos: newTodos,
            count: newTodos.length
        });
    },
    handleChecked: function(todo) {
        var newTodos = this.state.todos.map(function(todoToToggle) {
            if(todo.completed === true) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
            return todoToToggle;
        });
        this.setState({todos: newTodos});
    },
    handleAllChecked: function(event) {
        var checked = event.target.checked;
        var newTodos = this.state.todos.map(function(todoToToggle) {
            if(checked === true) {
                todoToToggle.completed = true;
            } else {
                todoToToggle.completed = false;
            }
            return todoToToggle;
        });
        this.setState({
            todos: newTodos,
        });
    },
    render: function() {
        var createTodo = function(todo) {
            return (
                <TodoItem 
                    key={todo.id} 
                    todo={todo.title} 
                    completed={todo.completed}
                    completedCheck={this.handleChecked.bind(this, todo)} 
                    deleteTodo={this.handleDeleteTodo.bind(this, todo)}/>
            );
        };

        var todoItems;
        var footer;
        var totalCount = this.state.todos.length;
        var activeCount = this.state.todos.reduce(function(count, todo) {
            return todo.completed ? count : count + 1;
        }, 0);
        var completedCount = totalCount - activeCount;
        if(totalCount) {
            todoItems = (
                <section className="main">
                    <input 
                        className="toggle-all" 
                        type="checkbox" 
                        onChange={this.handleAllChecked} 
                        checked={activeCount === 0}/>
                    <ul className="todo-list">
                        {this.state.todos.map(createTodo, this)}
                    </ul>
                </section>
            );

            footer = <Footer count={this.state.count} allDeleteCompleted={this.handleDeleteCompleted}/>;
        }

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input 
                        className="new-todo" 
                        value={this.state.newTodo} 
                        onKeyDown={this.handleNewTodoKeyDown} 
                        onChange={this.handleChange} 
                        placeholder="What needs to be done?" 
                        autoFocus={true} />
                </header>
                
                {todoItems}
                {footer}
            </div>
        );
    }
});

ReactDom.render(<Main />, document.getElementById("todoapp"));