import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <>
        <ul>
        <NavLink to="/">@copy; 2021</NavLink>
        </ul>
        <ul>
          <NavLink to="/CatIndex">Meet All the Cats</NavLink>
          </ul>
          <ul>
          <NavLink to="/CatNew">Add a cat</NavLink>
        </ul>
      </>
    )
  }
}
export default Footer