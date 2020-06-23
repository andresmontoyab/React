import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customer';
import {Route, withRouter } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';
import { deleteCustomer } from './../actions/deleteCustomer';

class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    handlerOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleSubmit = values =>  {
        console.log(JSON.stringify(values)); 
        const { id }  = values;
        this.props.updateCustomer(id, values);       
    }

    handleOnBack = () => {
        this.props.history.goBack();
    };

    handleOnDelete = id => {
        console.log("handleOnDelete")
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer) {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return <CustomerControl 
                    {...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess= {this.handlerOnSubmitSuccess}
                    onBack={this.handleOnBack}
                    isDeleteAllow={!!isDelete}
                    onDelete={this.handleOnDelete}/>
                }
        return null;
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={ 
                ({ match: isEdit }) => (
                    <Route path="/customers/:dni/del" children={ 
                        ({ match: isDelete}) => (
                            this.renderCustomerControl(isEdit, isDelete))
                        } />
            )}/>
    )
    
    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body= {this.renderBody()}> </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    updateCustomer: PropTypes.func.isRequired,
    fetchCustomers: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props.dni)
})

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));