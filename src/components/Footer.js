import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <>
      <div className="page-foot">
        <ul>
        <NavLink to="/">@copy; 2021</NavLink>
        </ul>
        <ul>
          <NavLink to="/CatIndex">Meet All the Cats</NavLink>
          </ul>
          <ul>
          <NavLink to="/CatNew">Add a cat</NavLink>
        </ul>
        </div>
      </>
    )
  }
}
export default Footer