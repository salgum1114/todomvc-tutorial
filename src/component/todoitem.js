var React = require('react');
var ReactDom = require('react-dom');

var PropTypes = require('react').PropTypes;

var TodoItem = React.createClass({
    displayName: 'TodoItem',
    render: function() {
        return (
            <li>
                <div>
                    <input type="checkbox"/>
                    <label>
                        {this.props.todo}
                    </label>
                    <button>delete</button>
                </div>
            </li>
        );
    }
});

module.exports = TodoItem;