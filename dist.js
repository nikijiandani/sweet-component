const React = require('react');

module.exports = props => React.createElement("div", null, "`This is ", React.createElement("b", null, "really sweet"), " $", props.emoji && '😍', "` `This is also a really sweet $", props.emoji && '😍', "`");
