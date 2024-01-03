import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCCESS } from "../action/action";


const initialState = {
    product: [],
    isLoading: false,
    isError: null,
}

const productReducer = (state = initialState, action) => {
    console.log(action, 'from reducer');

    switch (action.type) {
        case GET_PRODUCT_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }

        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: null,
                product: action.data
            }
        }

        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            }
        }

        // post product reducers

        case POST_PRODUCT_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.data),
                isError: null
            }
        }

        case POST_PRODUCT_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }

        // DELETE PRODUCT
        case DELETE_PRODUCT_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: state.product.filter(val => val.id !== action.data),
                isError: null
            }
        }

        case DELETE_PRODUCT_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }

    }
}

export default productReducer;