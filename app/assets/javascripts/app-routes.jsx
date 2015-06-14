var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var BookIndex = require('./book_index.jsx');
var BookNew = require('./book_new.js.jsx');
var BookShow = require('./book_show.jsx')
var BookEdit = require('./book_edit.jsx')
var Header = require('./header.jsx');


var Root = React.createClass({
  render: function() {
    return (
        <div>
          <Header />
          <RouteHandler/>
          <p>footer</p>
        </div>
    );
  }
});

var PathA = React.createClass({
  render: function() { return <p>path A</p>; }
});

var PathB = React.createClass({
  render: function() { return <p>path B</p>; }
});


var AppRoutes = (
  <Route name="app" path="/" handler={Root}>
    <DefaultRoute handler={BookIndex}/>

    <Route name="new" path="/new" handler={BookNew} />
    <Route name="show" path="/show/:id" handler={BookShow} />
    <Route name="edit" path="/edit/:id" handler={BookEdit} />
    <Route name="index" path="/index" handler={BookIndex} />

  </Route>
);

module.exports = AppRoutes;