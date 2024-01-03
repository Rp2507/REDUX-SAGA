import axios from "axios";
import { BASE_URL, DELETE_PRODUCT_API, GET_PRODUCT_API, POST_PRODUCT_API, PUT_PRODUCT_API } from "../../constant";

// GET PRODUCT API FUNCTION
export function get_product() {
    return axios.get(BASE_URL + GET_PRODUCT_API).then((res) => {
        console.log(res, 'res from api');

        const data = res.data;
        const status = res.status;
        return {
            data, status
        }
    })
        .catch((err) => {
            console.log(err);
        })
}

// POST PRODUCT API FUNCTION
export function post_product(action) {
    // console.log(action, 'action from api');

    return axios.post(BASE_URL + POST_PRODUCT_API, action.payload).then((res) => {
        console.log(res, 'from api post');
        const data = res.data;
        const status = res.status;
        return {
            data,
            status
        }
    }).catch((err) => {
        console.log(err);
    })
}

// DELETE PRODUCT API FUNCTION
export function delete_product(action) {
    console.log(action, 'action from api delete');

    return axios.delete(BASE_URL + DELETE_PRODUCT_API).then((res) => {
        console.log(res, 'from api delete');
        const data = action.payload.id
        const status = res.status;
        return {
            data,
            status,
        };

    }).catch((err) => {
        console.log(err);
    })
}

// UPDATE PRODUCT API FUNCTION
export function put_product(action) {
    console.log(action, 'action from api delete');

    return axios.delete(BASE_URL + PUT_PRODUCT_API + action.payload.id, action.payload).then((res) => {
        console.log(res, 'from api delete');
        const data = res.data
        const status = res.status;
        return {
            data,
            status,
        };

    }).catch((err) => {
        console.log(err);
    })
}
