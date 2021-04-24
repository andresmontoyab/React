import React, {useState, useEffect} from 'react'
import './Slides.css'


const Slides = ({ images }) => {
    const [ activeIndex, setActiveIndex ] = useState(0)

    useEffect(() => {
        const tick = setInterval(() => {
            if(activeIndex < images.length -1) {
                setActiveIndex(activeIndex +1)
            } else {
                setActiveIndex(0)
            }
        }, 5000)

        return () => clearInterval(tick)
    }, [activeIndex, images.length])

    return (
        <div className='Slide'>
            <div className='Slide_Container'>
                { images.map((image, index) => (
                    <div>
                    <img 
                        src={image.src}    
                        alt={image.title}   
                        className= {
                            index === activeIndex
                            ? 'Slide_Container_Img Animation_Show'
                            : 'Slide_Container_Img Animation_Hide'
                        } 
                    />
                    </div>
                ))}
                <div className='Slide_Container_Title'>
                    {images[activeIndex].title}
                </div>
            </div>
        </div>
    )
}

Slides.defaultProps = {
    images: [
        {
            src: 'https://images.pexels.com/photos/3567673/pexels-photo-3567673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'The first Moon'
        },
        {
            src: 'https://images.pexels.com/photos/1276314/pexels-photo-1276314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'The red Moon'
        },
        {
            src: 'https://images.pexels.com/photos/580679/pexels-photo-580679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Eclipse'
        },
        
    ]
}


export default Slides
