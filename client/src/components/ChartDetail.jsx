var React = require('react');

var ChartDetail = function (props) {
  return (
    <div>
      <h3>{props.charts.title.label}</h3>
    </div>
  );
};

module.exports = ChartDetail;
