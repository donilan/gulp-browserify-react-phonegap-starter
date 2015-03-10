/** @jsx React.DOM */

var React = require("react");
var Content = require('./content');

var Home = React.createClass({
  render: function() {
    return <Content name={this.props.name} />;
  }
});

module.exports = Home;
