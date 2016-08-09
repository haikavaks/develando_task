var Item = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    var row = this.props.data;
    return (<ul className="Item">
      <li>
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
    </ul>);
  }
});
