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
        return (
            <div>
                <footer>
                    <span>
                        {this.props.count} items left
                    </span>
                    <ul>
                        <li onClick="{this.onAllClick}"><a href="#/">All</a></li>
                        <li onClick="{this.onActiveClick}"><a href="#/active">Active</a></li>
                        <li onClick="{this.onCompleteClick}"><a href="#/complete">Complete</a></li>
                    </ul>
                </footer>
            </div>
        );
    }
});
module.exports = Footer;