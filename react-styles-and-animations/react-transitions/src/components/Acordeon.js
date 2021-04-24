import React, { useState, useRef } from 'react'

const Acordeon = ({ title, content}) => {

    const [isExpanded, setExpanded] = useState(false)
    const contentRef = useRef()

    const panelStyles = {
        background: 'grey',
        color: '#FFF',
        padding: '0.5em 1em'
    }

    const contentStyles = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px',
        overflow: 'hidden' ,
        transition: 'all 350ms ease-out',
        border: '1px solid black',
        padding: isExpanded ? '1em 0.5em': '0 0.5em'
    }

    const toggle = () => setExpanded(!isExpanded)

    return (
        <div>
            <div style={panelStyles} onClick={toggle}>
                <span>{ title} </span>
            </div>
            <div style={contentStyles} ref={contentRef}>
                { content} 
            </div>
        </div>
    )
}

const AcordeonContainer = () => {
    return (
        <div>
            <Acordeon
                title = 'Acordeon Title'
                content= 'This is the first content'/>
            <Acordeon
                title = 'The second Acordean'
                content= 'This is the first content with more more more more text that the other one it is a lotof text because the idea is that his one has at leas two columns, lets wait'/>
        </div>
        
    )
}

export default AcordeonContainer
