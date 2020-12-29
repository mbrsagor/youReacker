import Axios from 'axios';

export const Start_LOADING = "Start_LOADING";
export const CATCH_ERROR = "CATCH_ERROR";
export const LOAD_POST = "LOAD_POST";
export const SELECT_POST = "SELECT_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

const URL = "https://jsonplaceholder.typicode.com/posts/";

export const createActions = dispatch => {
    const actions = {}
    actions.startLoading = () => dispatch({ type: START_LOADING })
    actions.catchError = (msg, error) => {
        console.log(error)
        dispatch({ type:CATCH_ERROR, payload:msg})
    };

    actions.loadPosts = async () => {
        actions.startLoading()
        try {
            const {data} = await Axios.get(URL)
            dispatch({ type:LOAD_POST, payload:data.slice(0, 10)})
        } catch (error) {
            actions.catchError('Server error occured', error)
        }
    };

    actions.selectPost = postId => dispatch({type:SELECT_POST, payload:postId})
    
    actions.createPost = async post => {
        actions.startLoading()
        try {
            const { data } = await Axios.post(URL, post)
            dispatch({ type:CREATE_POST, payload:data})
        } catch (error) {
            action.catchError('Server error occured', error)
        }
    };

    actions.updatePost = async (postId, updatePost) => {
        actions.startLoading()
        try {
            const {data} = await Axios.put(`${URL}/${postId}`, updatePost)
            dispatch({ type:UPDATE_POST, payload: data})
        } catch (error) {
            action.catchError("Server error occured", error);
        }
    };

    actions.deletePost = async postId => {
        actions.startLoading()
        try {
            await Axios.delete(`${URL}/${postId}`)
            dispatch({ type: DELETE_POST, payload: postId })
        } catch (error) {
            actions.catchError("Server error occured", error);
        }
    };

    return actions;
}

const reducer = (state, action) => {
    switch (action.type) {
        case START_LOADING:
            console.log(START_LOADING);
            return {
                ...state,
                isLoading: true
            }
        case CATCH_ERROR:
            console.log(CATCH_ERROR);
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case LOAD_POST:
            console.log(LOAD_POST);
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                error: ''
            }
        case SELECT_POST:
            console.log(SELECT_POST);
            const post = state.posts.find(p => p.id === action.payload)
            return {
                ...state,
                selectedPost: post
            }
        case CREATE_POST:
            console.log(CREATE_POST);
            const posts = [...state.posts, action.payload]
            return {
                ...state,
                posts
            }
        case UPDATE_POST:
            console.log(UPDATE_POST);
            const index = state.posts.findIndex(p => p.id === action.payload.id)
            const post = [...state.posts]
            posts[index] = action.payload

            return {
                ...state,
                posts
            }
        case DELETE_POST:
            console.log(DELETE_POST);
            const posts = state.posts.filter(p => p.id !== action.payload)
            return {
                ...state,
                posts
            }
        default: return state
    }
}

export default reducer;
