import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/actions/userActions'

const User = ({ user, updateName }) => {
    const handleChange = (e) => {
        const name  = e.target.value
        updateName(name)
    }

    return (
        <div>
            <h1>User Information</h1>
            <p>{ user.name }</p>
            <p>{ user.last_name }</p>
            <p>{ user.country }</p>
            <button onClick={updateName}> Update Name</button>
            <input type='text' onChange={handleChange}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }    
}

const mapDispatchToProps= (dispatch) => {
    return {
        updateName: (name) => dispatch(updateName(name))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(User)

