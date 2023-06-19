import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { productId } = useParams()
    const [singleData, setSingleData] = useState();
    const [error, setError] = useState({
        status: false,
        message: null
    })
    const [loading, setLoading] = useState(true)
    const fullUrl = 'http://localhost:1234/product/' + productId
    useEffect(() => {
        axios.get(fullUrl)
            .then(res => {
                setError({
                    status: false,
                })
                console.log(res.data.data)
                setSingleData(res.data.data)
                setLoading(false)
            }).catch(err => {
                console.log(err.response.data.msg)
                setError({
                    status: true,
                    message: err.response.data.msg,
                })
                setLoading(false)
            })
    }, []);
    return (
        <div>
            <center>
                {!error.status & !loading
                    ?
                    <>
                        <h2>ID: {singleData._id}</h2>
                        <h2>Name: {singleData.name}</h2>
                        <h2>Description: {singleData.description}</h2>
                    </>
                    :
                    <h1><strong>{error.message}</strong></h1>
                }
            </center>

        </div>
    )
}

export default SingleProduct
