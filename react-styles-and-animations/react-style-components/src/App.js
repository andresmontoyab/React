import './App.css';
import styled from 'styled-components';

const principalColor = '#789DFF'
const fontSize = 'font-size: 20px;'
const getLinearGradiente = (rot, colorOne, colorTwo) => {
  return `background: linear-gradient(${rot},${colorOne}, ${colorTwo})`
}

const Header = styled.header`
  ${getLinearGradiente('50deg', 'black', 'red')};
  text-align: center;
  border-radius: 0.2em;
  color: ${principalColor};
  padding: 0.3em;
  margin: 0.3em;
  ${fontSize}

  .own_class {
    color: purple;
  }
`

function App() {
  return (
    <div>
      <Header>
        <h1 className='own_class'>Style Components</h1>
      </Header>
      
    </div>
  );
}

export default App;
