

function Hello(props) {
    return <h2>Welcome {props.title}</h2>
  }
  
  const HelloArrow = (props) => <h2>Welcome {props.title}</h2>
  
  class HelloClass extends Component {
    render() {
    return <h2> Welcome {this.props.title}</h2> 
    }
  }

class Text extends Component {
    render() {
      const {
        text,
        number,
        boolean,
        arrays,
        object,
        mapper
      } = this.props
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{JSON.stringify(boolean)}</p>
        <p>{arrays.map(mapper).join(",")}</p>
        <p>{object.name}</p>
      </div>
    )
    }
  }

  
/*function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello title="People"></Hello>
          <HelloArrow title="People Arrow"></HelloArrow>
          <HelloClass title=" People Class"></HelloClass>
          <Text 
            text=" This is the text" 
            number={2} 
            boolean={false}
            arrays={[1,2,3]}
            object= {{name: 'Andrés'}}
            mapper={(number) => number * 3}
            ></Text>
        </header>
      </div>
    );
  }*/
  