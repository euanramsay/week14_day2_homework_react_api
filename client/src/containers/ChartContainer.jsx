var React = require('react');
var ChartList = require('../components/ChartList');
var ChartDetail = require('../components/ChartDetail');

var ChartContainer = React.createClass({

  getInitialState: function(){
    return { charts: [] }
  },
  componentDidMount: function () {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      var data = JSON.parse(request.responseText)['feed']['entry'];
      console.log(data);
      console.log(data[1].title.label);
      this.setState({
        charts: data
      });
    }.bind(this);
    console.log(this.state.charts);
    request.send(null);
  },
  render: function(){
    return(
      <div className="chart-container">
        <h2>Top 20 iTunes Chart</h2>
        <ChartList chart={this.state.charts}/>
      </div>
    );
  }
});

module.exports = ChartContainer;
