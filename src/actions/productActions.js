import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    STARTING_PRODUCT_DOWNLOAD,
    PRODUCT_DOWNLOAD_SUCCESS,
    PRODUCT_DOWNLOAD
} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // Add product to DB
            await axiosClient.post('/products', product);

            // If success
            dispatch(addProductSuccess(product));

            Swal.fire('Perfect!', 'The product was successfully added', 'success');
        } catch (error) {
            console.log(error);

            // If error
            dispatch(addProductError(true));

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'A error occurred. Please try again'
            });
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