import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// URL Target 
const url = 'https://backendrest3.herokuapp.com/books'

const Example = () => {
  const { loading, apiconnect } = useFetch(url)
  console.log(apiconnect)
  return (
    <div>
      {/* The ? sign is to replace a conditional rendering */}
      <h2>"{loading ? 'loading...' : 'API Connected'}"</h2>
    </div>
  )
}

export default Example
