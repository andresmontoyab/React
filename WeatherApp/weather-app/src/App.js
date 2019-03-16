import React, { Component } from 'react';
import './App.css';
import LocationList from './component/LocationList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Lima,pe',
];


class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city} `);
  }
  render() {
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
          <div className="details"></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
   
    );
  }
}

export default App;
