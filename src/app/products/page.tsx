import ClothingFilter from '@/components/Components/ProductFilter';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Our Ecommerce Products ",
    description: "Listing of Our Ecommerce Business Products.",
  };
  

const Products = () => {
  return (
    <>
    <ClothingFilter/>
    </>
  )
}

export default Products