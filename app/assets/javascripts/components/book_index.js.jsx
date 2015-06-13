var BookIndex = React.createClass({
  fetchBooks() {
    var that = this;
    $.get('/books.json', function(res) {
      if (that.isMounted()) {
        that.setState({books: res});
      }
    });
  },
  getInitialState() {
    return{
      books: []
    }
  },
  componentDidMount() {
    this.fetchBooks();
  },
  render() {
    var rows =  [];
    this.state.books.forEach(function(book) {
      rows.push(
        <div className="book_item">
          <div className="book_id">{book.id}</div>
          <div className="book_title">{book.title}</div>
          <div className="book_publish">{book.publish}</div>
        </div>
      );
    }.bind(this));
    return(
      <div className="book_list">
        {rows}
      </div>
    );
  }
});
