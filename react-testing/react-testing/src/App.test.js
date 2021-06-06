import React from 'react'
import App from './App'
import {configure, shallow, mount, render} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

/**
 * There are different ways to test real components
 * shallow: This is superficial mount within the memory, it is good for unique mount, every time that we render the component the context is unique
 * mount: It is very usefull when we want to test component related with APIs or component that are wrapped for other components, every time that we render this the context is global
 * render: Transfor the React tree in a html tag. With this one we can retrieve html component
 */

configure({
  adapter: new Adapter
})

describe('Group example test', () => {
  test('First enzyme test', () => {
    const wrapper  = shallow(<App></App>)
    expect(wrapper.find('h1').html()).toBe('<h1>Testing Introduction</h1>')
    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.html()).toBe('<div><h1>Testing Introduction</h1></div>')
  })
  

  test('first unit test', () => {
    expect(10).toBe(10)
  })

  test('second unit test', () => {
    expect(10).toBe(10)
  })
})

