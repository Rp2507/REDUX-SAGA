import { takeLatest } from "@redux-saga/core/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../../admin/action/action";
import { handle_delete_product_api, handle_get_product_api, handle_post_product_api, handle_put_product_api } from "../admin/manageProduct";

// GET - PRODUCT SAGA
export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_get_product_api);
}

// POST - PRODUCT SAGA
export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PROGRESS, handle_post_product_api);
}

// DELETE - PRODUCT SAGA
export function* delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PROGRESS, handle_delete_product_api)
}

// UPDATE - PRODUCT SAGA
export function* put_product_saga() {
    yield takeLatest(PUT_PRODUCT_PROGRESS, handle_put_product_api)
}
