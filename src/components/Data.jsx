import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from '../redux-saga/admin/action/action';
import Swal from 'sweetalert2';


function Data() {

    const [view, setview] = useState({})

    const productName = useRef();
    const productBrand = useRef();
    const productPrice = useRef();

    const product = useSelector((state) => state.productReducer);

    // Post Data Dispatch
    const dispatch = useDispatch()


    console.log(product, 'product from data');

    // Add Data Function
    const postData = () => {
        const data = {
            productName: productName.current.value,
            productBrand: productBrand.current.value,
            productPrice: productPrice.current.value
        }

        dispatch({ type: POST_PRODUCT_PROGRESS, payload: data })

        console.log(data, 'this is post data');
    }

    //  Delete Data Function
    const deleteData = (val) => {
        console.log(val);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

        dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: val })
    }

    //  UPDATE Data Function

    const viewData = (val) => {
        setview(val)
    }

    const handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    const updateData = () => {
        dispatch({ type: PUT_PRODUCT_PROGRESS, payload: view })
    }


    return (
        <div>

            <input type="text" ref={productName} placeholder='productName' />
            <input type="text" ref={productBrand} placeholder='productBrand' />
            <input type="number" ref={productPrice} placeholder='productPrice' />
            <button onClick={postData}>ADD Product</button>

            <input type="text" placeholder='productName' value={view?.productName} />
            <input type="text" placeholder='productBrand' value={view.productBrand} />
            <input type="number" placeholder='productPrice' value={view.productPrice} onChange={handle} />
            <button onClick={updateData}>UPDATE Product</button>

            {

                product.product?.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <h6>PRODUCT LIST</h6>
                            <h4>productID: {val.id}</h4>
                            <h1>productName: {val.productName}</h1>
                            <h2>productBrand: {val.productBrand}</h2>
                            <p>Rs.{val.productPrice}</p>
                            <button onClick={() => deleteData(val)}>DELETE</button>
                            <button onClick={() => viewData(val)}>View</button>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default Data