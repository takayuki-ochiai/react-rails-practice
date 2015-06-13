var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// var Route = Router.Route;
// var RouteHandler = Router.RouteHandler;

var Route = ReactRouter.Route

var Books = (
  <Route name="app" path="/" handler={Books}>
    <DefaultRoute handler={BookIndex}/>
    <Route name="index" handler={BookIndex} />
  </Route>
)

// var Books = React.createClass({
//   render: function () {
//     var Link = Router.Link;
//     return (
//       <div>
//         <RouteHandler/>
//       </div>
//     );
//   }
// });

// var routes = (
//   <Route name="app" path="/" handler={Books}>
//     <DefaultRoute handler={BookIndex}/>
//     <Route name="index" handler={BookIndex} />
//   </Route>
// );

// Router.run(Books, function (Handler) {
//   React.render(<Handler/>, document.body);
// });

