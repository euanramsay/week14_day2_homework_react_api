var React = require('react');

var ChartList = React.createClass({
  render: function () {

    console.log(this);

    var chartComponents = this.props.charts.map(function (chartObject) {      
      return (
        <h3>{props.charts.title.label}</h3>
        )
    });
  }
});

module.exports = ChartList;
