import React from 'react';

import {featchData} from '../../data/product_data';
import Info from '../product/info';
import Price from '../product/price';
import Category from '../product/category';

class Product extends React.Component {

    constructor(props){
        super(props);

        const product = featchData(props.id);
        this.state = {
            id: product.id ||'',
            name: product.name ||'',
            config: product.config ||'',
            color: product.colors ||'',
            price: product.price ||'',
            category: product.category ||[]
        }
    }

    render() {
        const {name, config, color, price, category} = this.state
        return (
            <div>
                <Info name={name} config={config} colors={color}/>
                <hr/>
                <Price price={price}/>
                <hr />
                <Category category={category}/>
            </div>
        )
    }
}

export default Product;
