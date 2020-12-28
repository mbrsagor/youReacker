import React, { Component } from 'react';
import ChildComponent from './childComponent'


const url = 'https://jsonplaceholder.typicode.com/posts'


class LifecycleDemo extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log("Calling from parent constructor 1");
    // }

    // state = {
    //     count: 0
    // }

    // static getDrivedStateFromProps(nextProps, prevState) {
    //     console.log("from getDrivedStateFromProps method 2");
    //     return null;
    // }

    // componentDidMount() {
    //     console.log("Calling from component Did Mount method 3");
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("calling from shouldComponentUpdate. 4");
    //     console.log(this.state);

    //     return false;
    // }

    // componentDidUpdate() {
    //     console.log("Calling from componentDidUpdate. 5");
    // }

    // state = {
    //     arr: ['Data One', 'Data two', 'Data three']
    // }

    // handleRemoved = index => {
    //     let arr = [... this.state.arr]
    //     arr.splice(index, 1);
    //     this.setState({arr});
    // }

    state = {
        posts: [],
        error: ''
    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({posts: data})
            })
            .catch(e => {
                console.log(e);
                this.setState({error: "Server error occured"})
            })
    }


    render() {
        // console.log("Calling from render function 6")

        const { posts, error } = this.state;

        if (error) {
            return <h3>{error}</h3>
        }
        
        if(posts.length === 0){
            return <h3>Loading...</h3>
        }

        return (
            <div>
                <h4>Lifecycle Demo</h4>


                <ul className="list-group">
                    {this.state.posts.map((post, index) => (
                        <li className="list-group-item" key={index}>{post.title}</li>
                    ))}
                    
                </ul>

                {/* {this.state.arr.map((a, index) => <ChildComponent key={index} data={a} index={index} remove={this.handleRemoved} />)} */}
                {/* <ChildComponent /> */}
                {/* <button className="btn btn-info btn-sm" onClick={() =>{this.setState({count:this.state.count + 1})}}>Add</button> */}
            </div>
        )
    }
}

export default LifecycleDemo;
