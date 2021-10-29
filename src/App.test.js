import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import cats from './mockCats.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When the app renders", () => {
  it("displays a header and footer", () => {
    const renderedApp = shallow(<App/>)
    const renderedFooter = renderedApp.find("Footer")
    expect(renderedFooter.length).toEqual(1)
  })

})