import React from 'react';


class Category extends React.Component {
    render() {
        return (
            <>
                <h4>Category:</h4>
                <ul>
                    {this.props.category.map((cat) =>
                        <li>{cat}</li>
                    )}
                </ul>
            </>
        )
    }
}

export default Category;
