import React from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from './../redux/actions/postActions'

export const Posts = (props) => {
    console.log(props)
    const loadPosts = () => {
        props.dispatch(fetchPosts)
    }
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={loadPosts}>Load Posts</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return state
}



export default connect(
    mapStateToProps
)(Posts)
