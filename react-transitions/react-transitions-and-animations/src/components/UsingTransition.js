import React, {useState} from 'react';
import './../animations.css'


const Header = ({show}) => {
const classes = show ? 'header header-active' : 'header' 
 


  return (
    <header className={classes}>
      <h1> Transicions Css in linesss</h1>
      <span role='img' aria-label='fire'>
        Fire
      </span>
    </header>
  )
}

function UsingTransition() {
    const [active, setActive] = useState(false)
    const toggle = () => setActive(!active)
    return (
        <div>
            <button onClick={toggle}>{active ? 'Disable' : 'Enable'}</button>
            <Header show={active}/>
        </div>
    )
}

export default UsingTransition