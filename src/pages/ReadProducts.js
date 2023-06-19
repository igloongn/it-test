import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";
import {
    useParams,
    useLocation,
    useHistory,
    Link,
    useRouteMatch,
} from "react-router-dom";
// Get the router object

const ReadProducts = () => {
    let history = useHistory();
    const [productData, setproductData] = useState([])
    const [loading, setLoading] = useState(true);

    // No Reloading at all
    useEffect(() => {
        let url = 'http://localhost:1234/product'
        axios.get(url)
            .then(res => {
                setproductData(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log('This is the Read Product Error')
                console.log(err)
            })
    }, [])    

    // Smart Reloading
    // useEffect(() => {
    //     let url = 'http://localhost:1234/product'
    //     axios.get(url)
    //         .then(res => {
    //             setproductData(res.data.data)
    //             setLoading(false)
    //         })
    //         .catch(err => {
    //             console.log('This is the Read Product Error')
    //             console.log(err)
    //         })
    // })

    const deleteProduct = (id) => {
        let  url = 'http://localhost:1234/product/' + id
        axios.delete(url)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
        }}>
            <div style={{
                width: 900,
            }}>
                <div style={{ height: 400, width: '100%' }}>
                    {loading
                        ?
                        <center><h2>Loading...</h2></center>
                        :
                        productData.map((data, index) => {
                            return (
                                <div key={data._id} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    // justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Link target={'_blank'} to={"product/" + data._id}>
                                        {Text}
                                        <h2>S/N: {index}</h2>
                                        <h2>ID: {data._id}</h2>
                                        <h2>Name: {data.name}</h2>
                                        <h2>Description: {data.description}</h2>
                                    </Link>
                                    <div style={{ marginLeft: 100 }}>
                                        <Button color={'warning'} size="large" variant="outlined" onClick={() => history.push('/product/update/' + data._id)}>
                                            Update
                                        </Button>
                                        <Button onClick={() => deleteProduct(data._id)} color={'error'} style={{ marginLeft: 20 }} size="large" variant="outlined" >
                                            Delete
                                        </Button>
                                    </div>
                                    <hr />
                                    <hr />
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default ReadProducts
