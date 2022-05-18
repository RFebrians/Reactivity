import React from 'react'
import Product from './Product'
//fixthisimport { useFetch } from '../../custom-hooks/final/2-useFetch'
// import defaultImage from '../../../assets/react.png';


const url = 'https://backendrest3.herokuapp.com/books'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
