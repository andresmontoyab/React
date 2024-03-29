import React, { useState, useEffect } from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"
import { db } from './firebase'
import firebase from 'firebase'

function Post({imageUrl, username, caption, postId, user}) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    useEffect(() => {
        let unsubscribe
        if (postId) {
            unsubscribe = db.collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        };
    }, [postId])

    const postComment = (event) => {
        event.preventDefault();
        db.collection('posts')
            .doc(postId)
            .collection('comments')
            .add({
                text: comment,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            });
            setComment('')
    }

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

            {
                <div className="post__comments">
                    {comments?.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))}
                </div>
            }

            { user && (
                <form className="post__commentBox">
                 <input 
                     className="post__input"
                     type="text"
                     placeholder="Add Comment"
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}
                 />
                 <button 
                     className="post__button"
                     disabled={!comment}
                     type="submit"
                     onClick={postComment}>Post </button>
                </form>
            )}
           
        </div>
    )
}

export default Post
