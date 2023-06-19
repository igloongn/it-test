import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, TextareaAutosize, Typography } from '@mui/material';
import { style } from '../utils/Styles';
import axios from 'axios';
const Createform = () => {
    const [productName, setproductName] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [error, setError] = useState(false);
    const [helperText, sethelperText] = useState('');
    const [isShowingAlert, setShowingAlert] = useState(false);
    const [result, setresult] = useState('')

    const handleSumit = (e) => {
        if (productName.length === 0 || productDescription.length === 0) {
            e.preventDefault()
            setError(true)
            sethelperText('Please Fixed your Inputs')
        } else {
            setError(false)
            sethelperText('')
            const url = 'http://localhost:1234/product'
            const payload = {
                productName,
                productDescription
            }
            axios.post(url, payload)
                .then(res => {
                    console.log(res.data.msg)
                    setresult(res.data.msg)
                    setShowingAlert(true)

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
            >Create Form</Typography>
            <center><h3
                className={`alert alert-success ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}
                onTransitionEnd={() => setShowingAlert(false)}
            >{result}</h3></center>
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
                        variant="contained"
                        id=""
                        label="This is an IT Test"
                        // label="Product Name"
                        helperText={helperText}
                        onChange={(e) => setproductName(e.target.value)}
                    />
                    <br />

                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Product Description"
                        style={{ width: 200 }}
                        onChange={(e) => setproductDescription(e.target.value)}
                    />
                    <br />
                    <br />
                    <Button variant="outlined" color="success" onClick={handleSumit} >Post</Button>

                </div>
            </Box>
        </div>
    )
}

export { Createform }
