import React, { Component } from 'react';
import './App.css';
import LocationList from './component/LocationList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtended from './component/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Lima,pe',
];

const cities2 = [
  'Buenos Aires,ar',
  'Bogota,col',
];

class App extends Component {

  constructor() {
    super();
    this.state = { 
      city: 'Nueva Ciudad',
      cities
    }
  }
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city} `);
    this.setState({
      city,
      cities: cities2})
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
          <Paper elevation={4}>
            <div className="details">
              <ForecastExtended city={city}></ForecastExtended>
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
   
    );
  }
}

export default App;
