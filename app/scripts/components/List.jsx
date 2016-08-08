/** @jsx React.DOM */
/**
 * Created by hayk.avagyan on 08/08/2016.
 */

var List = React.createClass({
  propTypes: {
    arr: React.PropTypes.array.isRequired,
    click:React.PropTypes.func.isRequired
  },
  handleClick(id) {

    this.props.click();
  },
  render: function () {
    self = this;
    return (<ul>{
      this.props.arr.map(function (row) {
        return <li key={row.id} onClick={self.handleClick} >
          <span>{row.title}</span>
          <span>{row.author}</span>
          <span>{row.category}</span>
          <span>{row.description}</span>
          <img src={row.image}/>
        </li>
      })
      }
    </ul>);
  }
});



