import React, { Component } from 'react'
import notFound from '../assets/not-found.jpeg'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
      <h3>Ooops, no cats here!</h3>
      <img src={notFound} alt="404 not found" className="cat-friend" width="400px"/>
    </div>
    )
  }
}
export default NotFound