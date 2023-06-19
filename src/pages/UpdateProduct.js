import React from 'react'
import { Updateform } from '../comps/Updateform'
import { Link } from "react-router-dom";

const UpdateProduct = () => {
  return (
    <>
      <Updateform />
      <br />
      <br />
      <h2><center>Checkout all the <Link to="./read">products</Link></center></h2>
    </>

  )
}

export default UpdateProduct
