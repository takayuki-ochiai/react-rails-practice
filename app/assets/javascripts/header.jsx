var Router = require('react-router');
var Link = Router.Link;
var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div><Link to="index" >Index</Link></div>
        <div><Link to="new" >New</Link></div>
      </div>
    );
  }
});

module.exports = Header;
