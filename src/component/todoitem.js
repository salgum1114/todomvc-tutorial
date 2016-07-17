var React = require('react');
var ReactDom = require('react-dom');

var PropTypes = require('react').PropTypes;

var TodoItem = React.createClass({
    displayName: 'TodoItem',
    propTypes: {
        title: PropTypes.string
    },
    render: function() {
        return (
            <li>
                <div>
                    <label>
                        {this.props.title}
                    </label>
                </div>
            </li>
        );
    }
});

module.exports = TodoItem;