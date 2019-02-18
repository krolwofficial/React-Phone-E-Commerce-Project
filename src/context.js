import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }

    componentDidMount() {
        let products = [];

        storeProducts.forEach(product => {
            const singleProduct = {...product};
            products = [...products, singleProduct];

        });

        this.setState({ products });
    }

    handleDetail = () => {
        console.log('hello from detail')
    }
    addToCart = (id) => {
        console.log(`Id is ${id}`)
    }

    render() { 
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }
