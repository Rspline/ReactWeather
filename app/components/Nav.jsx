var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('not done yet');
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
                <ul className="menu">
                  <li><input type="search" placeholder="Search weather"/></li>
                  <li><button className="button">Get weather</button></li>
                </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
