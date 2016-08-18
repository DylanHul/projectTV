import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My Project</h1>
        {this.props.children}
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/list">List</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
        </ul>
      </div>
    )
  }
})
