var {Router,Route,Link} = ReactRouter

var NavComponent = React.createClass({
  render: function() {
    return (

<div>      
   <nav className="navbar navbar-inverse navbar-static-top">
    <ul className="nav nav-pills">
      <li><a href="#">Homeies</a></li>
      <li><Link to="/normalville">Normalville</Link></li>
      <li><Link to="/crazytown">Crazy Town</Link></li>
      <li><Link to="/offMap">No Return</Link></li>
    </ul>
  </nav>
           {/* Magic : */}
        {this.props.children}   
  </div>    
      
    );
  }
});

var NormalvilleComponent = React.createClass({
  render: function() {
    return (
      <div>
      <h2>Welcome to Normal Ville, everything is normal. </h2>
      </div>
    );
  }
});

var CrazyTownComponent = React.createClass({
  render: function() {
    return (
      <div>
      <h2>Welcome to Crazy Town, we all crazy here. </h2>
      </div>
    );
  }
});


var OffMapComponent = React.createClass({
  render: function() {
    return (
      <div>
      <h2>You've gone outside the map.</h2>
      </div>
    );
  }
});


ReactDOM.render(
  <Router>
    <Route path="/" component={NavComponent}>
        {/*Nesting Happens Here, notice since router is 
         another component at it's core, these are it's children */} 
      <Route path ="/normalville" component={NormalvilleComponent}/>
      <Route path ="/crazytown" component={CrazyTownComponent}/>
    </Route>
         {/*This guy on the other hand is not*/}
      <Route path ="/offMap" component={OffMapComponent}/>
  </Router>,
  document.getElementById('App')
);