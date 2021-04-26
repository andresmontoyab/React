import './App.css';
import styled from 'styled-components';

const Header = styled.header`
  background: blue;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

function App() {
  return (
    <div>
      <Header>
        <h1>Style Components</h1>
      </Header>
      
    </div>
  );
}

export default App;
