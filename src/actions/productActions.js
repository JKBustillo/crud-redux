import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';
import axiosClient from '../config/axios';

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // Add product to DB
            await axiosClient.post('/products', product);

            // If success
            dispatch(addProductSuccess(product));
        } catch (error) {
            console.log(error);

            // If error
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// If product is successfully saved in DB
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// If there's error saving
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})