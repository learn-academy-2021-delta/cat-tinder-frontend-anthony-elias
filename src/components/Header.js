import React, { Component } from 'react'
import catTinder from '../assets/cat-tinder.png'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <>
      <div className="cat-pic">
      <h3>Cat Tinder!</h3>
      <img src={catTinder} alt="Cats!" className="cats" width="100px" height="100px"/>
      <div className="page-head">
        <ul>
          <NavLink to="/CatIndex">Meet All the Cats</NavLink>
          </ul>
          <ul>
          <NavLink to="/CatNew">Add a cat</NavLink>
        </ul>
        </div>
    </div>
    </>
    
    )
  }
}
export default Header