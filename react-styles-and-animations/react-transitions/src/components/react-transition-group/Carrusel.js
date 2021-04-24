import React, {useState} from 'react'
import './Carrusel.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Carrusel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const left = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex-1)
        } else {
            setActiveIndex(images.length -1)
        }
    
    }
    const right = () => {
        if (activeIndex < images.length -1) {
            setActiveIndex(activeIndex+1)
        } else {
            setActiveIndex(0)
        }
    }
    return (
        <div className='Carrusel'>
            <div className='Carrusel_Button'>
                <button onClick={left}>
                    Previous
                </button>
                <button onClick={right}>
                    Next
                </button>
            </div>
            <TransitionGroup>
                <CSSTransition
                    timeout={1000}
                    classNames='slide'
                    key={activeIndex}
                    >
                    <img 
                        src={images[activeIndex]} 
                        alt="Imagen"
                        className='Carrusel_Img'
                    />
                </CSSTransition>
            </TransitionGroup>
            
        </div>
    )
}


const CarruserlContainer = () => {

    return (
        <div>
            <Carrusel
                images ={[
                    'https://images.pexels.com/photos/2434165/pexels-photo-2434165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                    'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&h=650&w=940',
                    'https://images.pexels.com/photos/3889889/pexels-photo-3889889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                    'https://images.pexels.com/photos/2168974/pexels-photo-2168974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                ]}
            />

        </div>
    )
}

export default CarruserlContainer
