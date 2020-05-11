import React, { Component } from 'react';
import './App.css';
import LocationList from './component/LocationList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtended from './component/ForecastExtended';
import { createStore } from 'redux'; 
import { setCity } from './actions/index';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Lima,pe',
];

const store = createStore(() => {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  constructor() {
    super();
    this.state = { 
      city: null,
      cities
    }
  }
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city} `);
    this.setState({
      city,
    });
    store.dispatch(setCity(city));
  }
  render() {
    const { city } = this.state; 
    const { cities } = this.state; 
    return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className="App">
            <LocationList cities={cities} 
                          onSelectedLocation={this.handleSelectionLocation}></LocationList>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Paper zDepth={4}>
            <div className="detail">
              {
                city ? 
                <ForecastExtended city={city}></ForecastExtended> :
                <h1> No se selecciono ciudad</h1>
              }
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
   
    );
  }
}

export default App;
