import React, { Component } from 'react'

const Wrapper = props => props.children;

const withName = Component => {
    const name = "Mbr Sagor";
    
    return class MyComponent extends Component {
        render() {
            return (
                <Component name={name} />
            )
        }
    }
}

// const DisplayName = props => {
//     <h2>Hello {props.name}</h2>
// }
// const DisplayWithName = withName(DisplayName);

class HigherOrderComponent extends Component {

    componentDidMount() {
        document.title = "My Homepage";
    }

    render() {
        return (
            <Wrapper>
                <h2>I'm {this.props.name}</h2>
                <p>Competently extend resource-leveling networks before global platforms. Credibly fabricate quality information via 24/7 infrastructures. Dramatically provide access to alternative communities.</p>
            </Wrapper>
        )
    }
}

export default withName(HigherOrderComponent);
