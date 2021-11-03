import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import cats from './mockCats.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      cats: cats
    }
  
  }

  render(){
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/CatIndex"
          render={(props) => <CatIndex cats={this.state.cats} />}
          />
           <Route
            path="/CatShow/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(c => c.id === +id)
              return <CatShow cat={cat} deleteCat={this.deleteCat} />
            }}
          />
          <Route path="/CatNew" component={CatNew} />
          <Route path="/CatEdit" component={CatEdit}/>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
