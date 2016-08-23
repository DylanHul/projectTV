import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import List from './modules/List'
import Search from './modules/Search'
import Repo from './modules/Repo'
import Home from './modules/Home'


const url = new URL('http://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes')

console.log(url)

// $.get('http://api.tvmaze.com/schedule?country=US', function(data) {
//     $.each(data, function(i, episode) {
//         var $html = $('#episode-template').clone();
//
//         $('.episode', $html).html(episode.name);
//         $('.episode', $html).attr('href', episode.url);
//
//         $('.show', $html).html(episode.show.name);
//         $('.show', $html).attr('href', episode.show.url);
//
//         $('.se', $html).html(episode.season + 'x' + episode.number)
//
//         $('#tvm-schedule').append('<li>' + $html.html() + '</li>');
//     });
// });

 // http://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=nextepisode
//  var xhr = new XMLHttpRequest();
//  xhr.open("GET", "https://www.codecademy.com/", false);
//
//  xhr.send()
//  console.log(xhr.status)
//  console.log(xhr.statusText)
// console.log("here is the URL: ", url);


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
