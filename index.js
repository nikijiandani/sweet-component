const React = require('react')

module.exports = props => 
<div>
  `This is <b>really sweet</b> ${props.emoji && '😍'}`
  `This is also a really sweet ${props.emoji && '😍'}`
</div>