import React from 'react'

async function getDetailProduct (id: number) {
  console.log(id,'awkwo')
    const products = await fetch(`https://dummyjson.com/products/${id}`)
    // console.log(products.json())
    return products.json();
}


export default async function DetailProduct({
  params,
}: {
  params: { id: number };

})  {
  const data  = await getDetailProduct(params.id)

  console.log(params.id)
  console.log(data,'ini data')

  return (
    <div>
      <p>Model: {data.title}</p>
      <p>Price: ${data.price}</p>
      <p>Brand: {data.brand}</p>
      <p>Category: {data.category}</p>
      <p>Description: {data.description}</p>
    </div>
  )
}
