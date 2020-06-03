import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    STARTING_PRODUCT_DOWNLOAD,
    PRODUCT_DOWNLOAD_SUCCESS,
    PRODUCT_DOWNLOAD_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case STARTING_PRODUCT_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case PRODUCT_DOWNLOAD_ERROR:
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCT_DOWNLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        default:
            return state;
    }
};