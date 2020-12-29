import React, { createContext, useReducer } from 'react';
import reducer, {createActions} from '../reducers/post_reducer'

const PostContext = createContext();

const init = {
    posts: [],
    selectPost: {},
    isLoading: false,
    error: ''
}

const PostProvider = props => {
    const [state, dispatch] = useReducer(reducer, init)
    const actions = createActions(dispatch)
    
    return (
        <PostContext.Provider value={{...state, actions}}>
            {props.children}
        </PostContext.Provider>
    )
}

export {PostProvider, PostContext}
