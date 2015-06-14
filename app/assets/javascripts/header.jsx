var Router = require('react-router');
var Link = Router.Link;
var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <span><Link to="index" >書籍情報一覧    </Link></span>
        <span><Link to="new" >書籍の新規登録    </Link></span>
      </div>
    );
  }
});

module.exports = Header;
