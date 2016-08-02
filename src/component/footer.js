'use strict';

var React = require('react');
var PropTypes = require('react').PropTypes;
var classNames = require('classnames');
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
        var nowShowing = this.props.nowShowing;
        return (
            <footer className="footer">
                <span className="todo-count">
                    {this.props.count} items left
                </span>
                <ul className="filters">
                    <li><a href="#/" 
                    className={classNames({selected: nowShowing === 'all'})}>All</a></li>
                    <li><a href="#/active"
                    className={classNames({selected: nowShowing === 'active'})}>Active</a></li>
                    <li><a href="#/completed"
                    className={classNames({selected: nowShowing === 'completed'})}>Complete</a></li>
                </ul>
                {clearButton}
            </footer>
        );
    }
});
module.exports = Footer;