import React from 'react'
import Counter from './components/Counter'

export const HelloComponent = () => (
  <h1>Hello Component</h1>
)

const App = () => {
  return (
    <div>
      <HelloComponent></HelloComponent>
      <Counter/>
      <h1>Testing Introduction</h1>
      <div className='container'>
        <span num={3} active={false}>First</span>
        <span num='3' active='false'>Second</span>
      </div>
      <input type="text"/>
      <div>
        <p>Hi there</p>
        <p>Hi there again</p>
      </div>
      
    </div>
  )
}

export default App
