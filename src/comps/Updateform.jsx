import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, TextareaAutosize, Typography } from '@mui/material';
import { style } from '../utils/Styles';
import axios from 'axios';
import { useParams } from 'react-router-dom'
const Updateform = ({ Theid }) => {
    const [productName, setproductName] = useState();
    const [productDescription, setproductDescription] = useState();
    const [error, setError] = useState(false);
    const [helperText, sethelperText] = useState('');
    const [result, setresult] = useState('')

    const { productId } = useParams()

    useEffect(() => {
        const url = 'http://localhost:1234/product/' + productId
        axios.get(url)
            .then(res => {
                setproductName(res.data.data.name)
                setproductDescription(res.data.data.description)
            })
            .catch(err => {
                console.error(err);
            })
    }, [])


    const handleSumit = (e) => {
        if (productName.length === 0 ) {
            e.preventDefault()
            setError(true)
            sethelperText('Please Fixed your Inputs')
        } else {
            setError(false)
            sethelperText('')
            const url = 'http://localhost:1234/product/' + productId
            const payload = {
                productName,
                productDescription
            }
            axios.patch(url, payload)
                .then(res => {
                    console.log(res)

                })
                .catch(err => {
                    console.error(err.message);
                    console.error(err.response.data.msg);
                })
        }
    }
    return (
        <div style={{ width: '100%', justifyContent: 'center' }}>
            <Typography
                align='center'
                variant='h2'
            >Update Form</Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div style={style.createFrom}>
                    <TextField
                        error={error}
                        required
                        variant="filled"
                        id=""

                        helperText={helperText}
                        value={productName}
                        onChange={(e) => setproductName(e.target.value)}
                    />
                    <br />

                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Product Description"
                        style={{ width: 200 }}
                        value={productDescription}
                        onChange={(e) => setproductDescription(e.target.value)}
                    />
                    <br />
                    <br />
                    <Button variant="outlined" color="info" onClick={handleSumit} >Update</Button>

                </div>
            </Box>
        </div>
    )
}

export { Updateform }
