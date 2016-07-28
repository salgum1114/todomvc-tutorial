'use strict';

var React = require('react');
var PropTypes = require('react').PropTypes;

var Footer = React.createClass({
    displayName: 'Footer',
    propTypes: {
        count: PropTypes.number
    },
    getDefaultProps: function() {
		return {count: 0};
	},
    render: function() {
        var clearButton = (
            <button className="clear-completed" onClick={this.props.allDeleteCompleted}>Clear completed</button>
        );

        return (
            <footer className="footer">
                <span className="todo-count">
                    {this.props.count} items left
                </span>
                <ul className="filters">
                    <li><a href="#/">All</a></li>
                    <li><a href="#/active">Active</a></li>
                    <li><a href="#/complete">Complete</a></li>
                </ul>
                {clearButton}
            </footer>
        );
    }
});
module.exports = Footer;