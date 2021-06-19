import React from 'react'

const List = ({title, list}) => {
    return (
        <div>
            <h1 className='big'>{title}</h1>
            <ul>
                {list.map(item => (
                    <li key={item.key}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
