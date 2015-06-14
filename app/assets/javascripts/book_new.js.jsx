var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;

var BookNew = React.createClass({
  mixins: [Navigation],
  getInitialState() {
    return { title: '', publish: '', published: '' };
  },
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  },
  handlePublishChange(event) {
    this.setState({publish: event.target.value});
  },
  handlePublishedChange(event) {
    this.setState({published: event.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    var publish = this.refs.publish.getDOMNode().value.trim();
    var published = this.refs.published.getDOMNode().value.trim();
    if (!title && !publish && !published) {
      return;
    }

    var that = this;
    $.post('/books.json', {"book[title]": title, "book[publish]": publish, "book[published]": published }, function(book) {
      that.transitionTo('show', params={id: book.id});
    }.bind(this));

    this.setState({ title: '', publish: '', published: '' })
    // this.refs.comment.getDOMNode().value = '';
  },
  render() {
    return (
      <div>
        <h1>新しく書籍を登録する</h1>
        <form className="bookForm" onSubmit={this.handleSubmit}>
          <div>タイトル<input type="text" ref="title" value={this.state.title} onChange={this.handleTitleChange} /></div>
          <div>出版社<input type="text" ref="publish" value={this.state.publish} onChange={this.handlePublishChange} /></div>
          <div>出版日<input type="text" ref="published" value={this.state.published} onChange={this.handlePublishedChange} /></div>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});

module.exports = BookNew;
