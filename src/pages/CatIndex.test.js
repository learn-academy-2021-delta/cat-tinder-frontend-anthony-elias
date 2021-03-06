import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When the page renders", () => {
    it("displays a heading", () => {
      const catIndex = shallow(<CatIndex />)
      const catIndexHeading = catIndex.find("h3")
      expect(catIndexHeading.text()).toEqual("Meet our Cats!")
    })
    
  })