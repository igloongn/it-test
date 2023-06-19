import React from 'react'
import { Createform } from '../comps/Createform'
import { Link } from "react-router-dom";

const CreateProduct = () => {
  return (
    <>
      <Createform />
      <br />
      <br />
      <h2><center>Checkout all the <Link to="./read">products</Link></center></h2>
    </>

  )
}

export default CreateProduct
