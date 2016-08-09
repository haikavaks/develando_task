/** @jsx React.DOM */
 
var List = React.createClass({
  propTypes: {
    arr: React.PropTypes.array.isRequired,
    click: React.PropTypes.func.isRequired
  },
  handleClick(row) {
    this.props.click(row.id);
  },
  render: function () {
    var self = this;
    return (<ul className="listing">{
      this.props.arr.map(function (row) {
        return <li key={row.id} onClick={(event) => self.handleClick(row, event)}>
          <div>
            <img src={row.image}/>
          </div>
          <div>
            <span>{row.title}</span><br/>
            <span>{row.author}</span><br/>
            <span>{row.category}</span><br/>
            <span>{row.description}</span><br/>
          </div>

        </li>
      })
    }
    </ul>);
  }
});



