import { useState, useEffect, useCallback } from 'react';

/* 
From here we'll use a combined hooks into a custom hooks form
Custom hooks allow us to create reusable hooks that can be used in multiple components.
We'll named it useFetch and it will be used in fetch-example
*/
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
