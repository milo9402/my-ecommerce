import React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import Button from '@/components/Button'

const ProductDetail: NextPage = ({data}:any) => {
    const { id, img, description, title, price } = data;
    return (
        <div
          className='flex flex-col justify-center'
            style={{
              width: '50%',
              margin: '5% auto',
            }}
        >
          <section className='flex flex-col md:flex-row justify-center'>
            <div>
              <img className="" src={data.image} 
                  style={{
                  maxWidth: '300px',
                  maxHeight: '300px',
                  width: '100%'
                }} 
              />
            </div>
            <div className='flex flex-col pb-10 md:p-10 m-0'>
              <div className="mb-4">
                <h3 className='font-bold mb-2'> {title} </h3>
                <p className="font-light mb-2" >$ { price } </p>
              </div>

              <span className="flex flex-col md:flex-row justify-around ">
                <Button className={"bg-green-300 dark:bg-gray-600 w-full"} onClick={undefined}>
                  Agregar
                </Button>
              </span>

            </div>
          </section>
          <section className='flex font-bold flex-col justify-center pb-10 md:p-10 m-0' >
            <div>
              <h3 className='font-bold mb-2' > Acerca de este producto</h3>
              <p className="font-medium" > { description } </p>
            </div>
          </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${context.params.index}`);
      const data = res.data;
      return {
        props: {
          data
        }
      }
    } catch (error) {
      return { error };
    }
  }

export default ProductDetail;
