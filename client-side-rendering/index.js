import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import List from './modules/List'
import Search from './modules/Search'
import Repo from './modules/Repo'
import Home from './modules/Home'
// var tvmaze = require("tvmaze-api")



// tvmaze.getByQuery('girls', true, [], function(result){
//     console.log(result);
// });

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/search" component={Search}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/list" component={List}/>
    </Route>
  </Router>
), document.getElementById('app'))
