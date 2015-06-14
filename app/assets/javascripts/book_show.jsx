var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;
var State = Router.State;

var BookShow = React.createClass({
  mixins: [Navigation, State],
  fetchBook(id) {
    var that = this;
    $.get(`/books/${id}.json`, function(res) {
      if (that.isMounted()) {
        that.setState({book: res});
      }
    });
  },
  getInitialState() {
    return { book: {} }
  },
  componentDidMount() {
    this.fetchBook(this.getParams().id);
  },
  render() {
    return (
      <div>
        <h1>書籍詳細</h1>
        <div className="book_id">{this.state.book.id}</div>
        <div className="book_title">{this.state.book.title}</div>
        <div className="book_publish">{this.state.book.publish}</div>
        <div>
          <Link to="index">もどる</Link>
        </div>
      </div>
    );
  }
});

module.exports = BookShow;