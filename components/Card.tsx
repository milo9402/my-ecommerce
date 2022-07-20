import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'


function Card({id,title, image, price, category}) {
  return (
    <div className="hover:bg-green-200  dark:hover:bg-gray-700 transition duration-300 ease-in h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-300 rounded-lg flex flex-col">
      <div>
        <img className="lg:h-72 md:h-48 w-full object-fill object-center p-6"
            src={image}alt="blog"/>
      </div>
        <div className="p-6  h-full flex flex-col justify-between ">
          <div className="flex flex-col">
            <p className="text-basemb-1">$ {price}</p>
            <p className="font-semibold mb-3">{title}</p>
            <Link
                href={`/product/${id}`}
              >
                <a className="text-gray-500 dark:text-white dark:font-semibold inline-flex items-center md:mb-2 lg:mb-0">See Product
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
              </Link>
          </div>

          <div>
            <Button className={"bg-green-300 dark:bg-gray-600 w-full"} onClick={undefined}>
              Agregar
            </Button>
          </div>
        </div>
    </div>

  )
}

export default Card