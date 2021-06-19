import React from 'react'
import List from './List'
import {configure, shallow, mount, render} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({
    adapter: new Adapter
})


describe('Testing <List/> Component', () => {
    // given
    const fruits = [
        { name: 'Apple', id: 1},
        { name: 'Orange', id: 2},
        { name: 'Pineaple', id: 3},
        { name: 'Strawberry', id: 4},
    ]

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<List title='Fruits' list={fruits}/>)

    })
    
    test('Checking nodes', () => {
        //then
        // Check if node exists
        expect(wrapper.find('h1').exists()).toBe(true)        

        // Check if it has css class
        expect(wrapper.find('h1').hasClass('big')).toBe(true)        

        // Check amount children
        expect(wrapper.find('ul').children().length).toBe(fruits.length)      
        
        // Validate content of node
        expect(wrapper.find('li').first().text()).toBe(fruits[0].name)      
        expect(wrapper.find('li').last().text()).toBe(fruits[fruits.length-1].name)      
        expect(wrapper.find('ul').childAt(2).text()).toBe(fruits[2].name)      
    })

    test('Validate update in props', () => {
        wrapper.setProps({
            list: [
                {
                    name: 'kiwi', id: 5
                }
            ]
        })

        //then
        expect(wrapper.find('li').length).toBe(1)

    })
    
    test('validate snapshot ', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
});

