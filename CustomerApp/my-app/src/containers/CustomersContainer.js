import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import {connect} from 'react-redux';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';
import { withRouter} from 'react-router-dom'
import { fetchCustomers } from '../actions/fetchCustomers'
import { getCustomers } from '../selectors/customer';

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new')
    };

    renderBody = (customers) => (
        <div>
            <CustomerList 
                customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}> Nuevo Cliente</button>
            </CustomerActions>
        </div>
    );
    
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body= {this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomer: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

const mapDispatchToProps =  { fetchCustomers };

CustomersContainer.defaultProps = {
    customers: []
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));