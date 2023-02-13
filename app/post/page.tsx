import React from 'react'
import Link from 'next/link'

async function getPost () {
    const products = await fetch('https://dummyjson.com/products?limit=10')
    return products.json();

}

export default async function Post () {
    const { products } = await getPost()
    // console.log(products.map((product : any) =>{console.log(product)}))
    // console.log(products)

  return (
    <div className='bg-slate-900 p-2'>
        {products.map((product : any) => {
            return(
               <div className='bg-gray-400 m-2 p-2 rounded'>
                <Link href={`/post/${product.id}`}>{product.id}.{product.title}</Link>
                <p className='mt-2'>{product.description}</p>
               </div>

            )
        })}
    </div>
  )
}
