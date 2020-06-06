import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';

const EditProduct = (props) => {
    const [product, setProduct] = useState({
        name: '',
        price: ''
    });

    const productEdit = useSelector(state => state.products.productEdit);
    // if (!productEdit) {
    //     props.history.push('/');
    //     return null;
    // }

    useEffect(() => {
        setProduct(productEdit);
    }, [productEdit]);

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const { name, price } = product;

    const handleSubmit = e => {
        e.preventDefault();

        editProductAction();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit New Product
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditProduct;