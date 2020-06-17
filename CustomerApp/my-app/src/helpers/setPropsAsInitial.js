import React, { Component } from "react";

export const setPropsAsInitial = WrapperComponent => (
    class extends Component {
        render () {
            return <WrapperComponent {...this.props} 
                initialValues = {this.props} 
                />
        }
    }
);