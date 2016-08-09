/** @jsx React.DOM */
var Filter = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    callback: React.PropTypes.func.isRequired,
    type: React.PropTypes.string.isRequired
  },
  handleClick(row) {
    this.props.callback(row, this.props.type)
  },
  render: function () {
    var self = this;
    var data = this.props.data;
    //TODO  disable filter and show all
    return (<ul className="sidebar-nav">{
      data.map(function (row, key) {
        return <li key={key} onClick={(event) => self.handleClick(row, event)}>
          <a>{row}</a>
        </li>

      })
    }
    </ul>);
  }
});
