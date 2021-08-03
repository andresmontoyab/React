import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post({imageUrl, username, caption}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Andres"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>

            <img
                className="post__image" 
                // src="https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?cs=srgb&dl=pexels-david-skyrius-2224861.jpg&fm=jpg" 
                src={imageUrl}
                alt=""/>

            <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>
        </div>
    )
}

export default Post
