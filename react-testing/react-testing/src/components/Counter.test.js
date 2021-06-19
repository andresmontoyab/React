import Counter from './Counter'
import React from 'react'
import {configure, shallow, mount, render} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({
    adapter: new Adapter
})


describe('Testing <Counter/> Component', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = shallow(<Counter/>)
    })

    test('Validate increment button is working', () => {
        // simulate click on increment
        wrapper.find('button').first().simulate('click')
        expect(wrapper.find('h1').text()).toBe('1')
    })

    test('Validate decrement button is working', () => {
        // simulate click on increment
        wrapper.find('button').last().simulate('click')
        expect(wrapper.find('h1').text()).toBe('-1')
    })
    
})