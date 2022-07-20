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
        <div className='lg:flex max-w-screen-2x1 mx-auto'>
          <div className='flex-grow m-5 shadow-sm'>
            <img style={{maxHeight:"2400px", objectFit:'cover'}} 
              src="https://www.muycomputerpro.com/wp-content/uploads/2021/03/fastly-10-consejos-ecommerce-principal.jpg"
            />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
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
        <div className='flex flex-col bg-white p-10 shadow-md'>
          { items?.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items?.length} items):
                <span className='font-bold ml-2'>
                  { accounting.formatMoney(total, 'EUR ')}
                </span>
                <Button className={"bg-green-300 dark:bg-gray-600 w-full"} onClick={()=>console.log('Aqui estaria pagando')}>
                  Pagar
                </Button>
              </h2>
            </>
          )
            
          }
        </div>

      </div>
    )
}

export default CheckoutPage;
