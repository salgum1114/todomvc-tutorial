'use strict';

var React = require('react');
var PropTypes = require('react').PropTypes;

var hashHistory = require('react-router').hashHistory;

var Footer = React.createClass({
    displayName: 'Footer',
    propTypes: {
        count: PropTypes.number
    },
    getDefaultProps: function() {
		// 클래스가 생성될 때 한번 호출되고 캐시된다.
		// 부모 컴포넌트에서 prop이 넘어오지 않은 경우 (in 연산자로 확인) 매핑의 값이 this.props에 설정된다.		
		return {count: 0};
	},
    onActiveClick: function() {
        hashHistory.push("/active");
    },
    onCompleteClick: function() {
        hashHistory.push("/complete");
    },
    render: function() {
        return (
            <div>
                <footer>
                    <span>
                        {this.props.count} items left
                    </span>
                    <ul>
                        <li onClick="{this.onActiveClick}">Active</li>
                        <li onClick="{this.onCompleteClick}">Complete</li>
                    </ul>
                </footer>
            </div>
        );
    }
});
module.exports = Footer;