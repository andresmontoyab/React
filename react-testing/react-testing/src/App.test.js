import React from 'react'
import App, {HelloComponent} from './App'
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
  })

  test('Selecting html elements', () => {
    const wrapper  = shallow(<App></App>)

    // find element by css selector
    console.log(wrapper.find('.container').html())

    // find element by css selector
    //console.log(wrapper.find('div p').html())

    // You can use almost every css selector in order to retrieve a specific element

    // Also we can select elements in base of the props send to the elements
    console.log(wrapper.find('[num="3"]').html())
    console.log(wrapper.find('[type="text"]').html())

    // You can even search the html information using a react component
    console.log(wrapper.find(HelloComponent).html())
  })
  

  test('first unit test', () => {
    expect(10).toBe(10)
  })

  test('second unit test', () => {
    expect(10).toBe(10)
  })
})

