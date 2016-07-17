'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;

var TodoItem = require('./component/todoitem');
var Footer = require('./component/footer');

var ENTER_KEY = 13;


var Main = React.createClass({
    getInitialState: function() {
        return {
            title: '',
            count: 0
        };
    },
    handleNewTodoKeyDown: function(event) {
        if(event.keyCode !== ENTER_KEY) {
            return;
        }
        var val = this.state.title.trim();
        var count = this.state.count;
        console.log(val);
        if(val) {
            this.setState({title: val});
            this.setState({count: ++count});
            this.setState({title: ''});
        }
    },
    handleChange: function(event) {
        this.setState({title: event.target.value});
    },
    render: function() {
        return (
            <div>
                <header>
                    <h1>todos</h1>
                    <input value={this.state.title} onKeyDown={this.handleNewTodoKeyDown} onChange={this.handleChange} placeholder="What needs to be done?" autoFocus={true}>
                    </input>
                </header>
                <TodoItem title={this.state.title} />
                <Footer count={this.state.count} />
            </div>
        );
    }
});

ReactDom.render(<Main />, document.getElementById("todoapp"));