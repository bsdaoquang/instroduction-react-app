import React, { useEffect, useState } from 'react'

function ProductItem({ id })
{

  const [name, setName] = useState('');

  useEffect(() =>
  {
    getProductDetail()
  }, [id])

  const getProductDetail = () =>
  {
    setName(`Product ${id}`)
    // get product detail from database
  }

  return (
    <div>{name}</div>
  )
}

export default ProductItem