import ContactPage from '@/components/Components/ContactUs';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Contact Us ",
    description: "Contact Ecommerce Website owner through Avalable form.",
  };
  

const Contact = () => {
  return (
    <div>
        <ContactPage/>
    </div>
  )
}

export default Contact