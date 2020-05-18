import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

class HomeContainers extends Component {

    handleOnClick = () => {
        console.log("handle on click");
        this.props.history.push('/customers')                         
    }
    render() {
        return (
            <div>
               <AppFrame 
                header= 'Home'
                body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomerActions>
                            <button onClick={this.handleOnClick}>Listado de clientes</button>
                        </CustomerActions>
                    </div>
                }></AppFrame>
            </div>
        );
    }
}

HomeContainers.propTypes = {

};

export default withRouter(HomeContainers);