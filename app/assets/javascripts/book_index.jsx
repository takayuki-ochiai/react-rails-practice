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
  deleteBook(id, title) {
    debugger;
    if (!confirm(`${title}を削除してもよろしいですか？`)) {
      return;
    }

    var that = this;
    $.ajax({
      url: `/books/${id}`,
      type: "DELETE",
      data: {},
      success: function() {
        that.fetchBooks();
      }.bind(this)
    });
  },
  render() {
    var rows =  [];
    this.state.books.forEach(function(book) {
      var boundDelete = this.deleteBook.bind(this, book.id, book.title);
      rows.push(
        <div className="book_item">
          <div className="book_id" ref="bookID">{book.id}</div>
          <div className="book_title" ref="title">{book.title}</div>
          <div className="book_publish">{book.publish}</div>
          <input type="button" onClick={boundDelete} value="この本を削除" />
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

module.exports = BookIndex;