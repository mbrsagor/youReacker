import React, {useReducer, useEffect} from 'react';
import Axios from 'axios';


const START_LOADING = 'START_LOADING'
const FETCH_POST = 'FETCH_POST'
const FETCH_ERROR = 'FETCH_ERROR'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

const initalState = {
    isLoading: false,
    error: '',
    posts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_POST:
            const posts = action.payload.map(post => ({
                ...post,
                isFavorited: false
            }));
            return {
                isLoading: false,
                error: '',
                posts
            }
        case FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload || 'Server Error Occcured'
            }
        case TOGGLE_FAVORITE:
            return state;
        default: return initalState;
    }
}

const MyReducer2 = props => {

    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => {
        dispatch({type: START_LOADING})
        Axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(({data}) =>{
                data = data.slice(0, 5)
                dispatch({type: FETCH_POST, payload:data})
            }).catch(e => {
                console.log(e);
                dispatch({type: FETCH_ERROR})
            })
    }, [])

    const {isLoading, error, posts} = state

    return (
        <div>
            <h3>Reducer version Implementation</h3>
            {isLoading && <h4>Loading...</h4>}
            {error && <h4>{error}</h4>}
            {posts.length > 0 && <ul className="list-group">
               { posts.map(post => (
                    <li key={post.id} className="list-group-item">
                       {post.title}
                       <button className="btn btn-success btn-sm ml-2">{post.isFavorited ? 'Already Fav' : 'Fav'}</button>
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default MyReducer2;
