import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../actions/productActions';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
    }, []);

    return (
        <Fragment>
            <h2 className="text-center my-5">Product List</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;