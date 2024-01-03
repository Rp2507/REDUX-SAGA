import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS } from "../../admin/action/action";

import { delete_product, get_product, post_product, put_product } from "../../admin/api/api";
import { call, put } from "redux-saga/effects";


// get product data
export function* handle_get_product_api(action) {

    try {
        const res = yield call(get_product, action)
        console.log(res, 'res from manageProduct');
        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({
                type: GET_PRODUCT_ERROR, data
            })
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e })
    }
}


// post product data
export function* handle_post_product_api(action) {
    console.log(action, 'action from handlepost');
    try {
        const res = yield call(post_product, action);
        console.log(res, "from manageProduct");
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e });
    }
}

// delete product data
export function* handle_delete_product_api(action) {
    console.log(action, 'action from handleDelete');
    try {
        const res = yield call(delete_product, action)
        console.log(res, 'from manage delete');
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_PRODUCT_ERROR, e })
    }
}

// UPDATE product data
export function* handle_put_product_api(action) {
    console.log(action, "this is from handle post");
    try {
        const res = yield call(put_product, action);
        console.log(res, "from manageProduct");
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: PUT_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: PUT_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: PUT_PRODUCT_ERROR, e });
    }
}
