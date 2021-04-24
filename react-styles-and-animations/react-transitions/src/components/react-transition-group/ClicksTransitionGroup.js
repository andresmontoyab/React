import React, {useState} from 'react'
import { TransitionGroup, CSSTransition} from 'react-transition-group'

export const ClicksTransitionGroup = () => {
    const [ clicks, setClicks] = useState(0)
    const increment = () => setClicks(clicks +1)
    const decrement = () => setClicks(clicks -1)
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <TransitionGroup>
                <CSSTransition
                    timeout={1000}
                    classNames='fade'
                    key={clicks}
                >
                <div>
                  <h1>{clicks}</h1>
                </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
