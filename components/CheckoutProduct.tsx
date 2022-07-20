import React from 'react'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket } from '@/slices/basketSlice';
import accounting from 'accounting'

function CheckoutProduct({title, description,  price,  id,  image,  category}) {

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,title, image, price, category, description
    }
    dispatch(addToBasket(product))
  }

  const removeItemToBasket = () => {
    dispatch(removeFromBasket({id}))
  }
  
  return (
    <div className='grid grid-cols-4 border-2 border-gray-200 border-opacity-60 '>
      <img 
        className="lg:h-72 md:h-48 w-full object-contain " 
        src={image}
      />
      <div className='col-span-2 mx-5 flex flex-col justify-content-evenly'>
        <p className="font-semibold">{title}</p>
        <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
        <p className='mt-10 text-cutt_colors_light text-lg font-bold'>
          {accounting.formatMoney(price, "COP ")}
        </p>
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-self-start'>
        <Button className={'button mt-auto bg-green-300 dark:bg-gray-600 w-full'} onClick={addItemToBasket}> Agregar </Button>
        <Button className={'button mt-auto bg-green-300 dark:bg-gray-600 w-full'} onClick={removeItemToBasket}> Eliminar </Button>
      </div>

    </div>
  )
}

export default CheckoutProduct