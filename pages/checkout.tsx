import React from 'react'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';
import Button from '@/components/Button';
import accounting from 'accounting'

const CheckoutPage: NextPage = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  console.log({items,total})
    return (
      <main className='lg:flex max-w-screen-2xl mx-auto md:mx-96'>
          <div className='flex-grow  shadow-sm'>
            <img style={{width:"2400px", height:'250px', objectFit:'cover'}} 
              src="https://webengage.com/blog/wp-content/uploads/sites/4/2017/08/E-commerce-Checkout-Conversion-Rate.png"
            />
          <div className='flex flex-col p-5 space-y-10 mr-5 ml-5 mb-5 bg-white dark:bg-gray-500'>
            <h1 className='text-3xl border-b pb-4'>
              {items?.length === 0 
                ? 'Aun no tienes productos en tu carrito '
                : 'Estos son los productos de tu carrito'
              }
            </h1>
            {
              items?.map((item,index)=>(
                <CheckoutProduct 
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                />
              ))
            }
          </div>
        </div>
        { items?.length > 0 && (
          <div className='flex flex-col bg-white dark:bg-gray-500 p-10 shadow-md'>
            <h2 className='whitespace-nowrap'>
              Subtotal ({items?.length} items):
              <span className='font-bold ml-2'>
                { accounting.formatMoney(total, 'COP ')}
              </span>
            </h2>
            <Button className={"bg-green-300 dark:bg-gray-600 w-full"} onClick={()=>console.log('Aqui estaria pagando')}>
              Pagar
            </Button>
          </div>
        )}
      </main>
    )
}

export default CheckoutPage;
