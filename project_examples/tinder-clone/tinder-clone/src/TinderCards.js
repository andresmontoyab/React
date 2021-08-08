import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Mambito',
            url: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },
        {
            name: 'New York',
            url: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            name: 'New York',
            url: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&h=750&w=1260'
        }
    ]);
    return (
        <div>
            <h1> Tinder Cards </h1>
            <div className="tinderCard__container">
            { people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}>
                        <div 
                            className="card"
                            style={{ backgroundImage: `url(${person.url})`}}>
                            <h3> {person.name }</h3>

                        </div>
                    </TinderCard>
                    ))}
                </div>
                
            
        </div>
    )
}

export default TinderCards
