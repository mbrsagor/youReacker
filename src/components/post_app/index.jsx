import React, {useContext} from 'react';
import {PostContext} from '../../context/post_context';


const PostApp = () => {
    const { posts, selectedPost, isLoading, actions } = useContext(PostContext)
    console.log(posts, selectedPost, isLoading, actions)
    return (
        <div>
            <h3>I'm a post app.</h3>
        </div>
    )
}

export default PostApp;
