import React from 'react'
import { mount, shallow } from 'enzyme'

import App from '../../../client/components/App'

test('<App />', () => {
  const expected = 'Viola'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})

test('App has one div', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  const actual = wrapper.find('div').length
  expect(actual).toEqual(expected)
})
