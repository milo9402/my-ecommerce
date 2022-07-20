import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Logo from '@/assets/img/carvajal-favicon.png'

function Carrousel() {
    return (
        <Carousel showThumbs={false} >
            <div>
                <img
                    style={{
                        maxHeight:"600px",
                    }} 
                    src="https://www.muycomputerpro.com/wp-content/uploads/2021/03/fastly-10-consejos-ecommerce-principal.jpg"
                />
            </div>
            <div>
                <img
                    style={{
                        maxHeight:"600px",
                    }}
                    src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg"

                />
            </div>
            <div>
                <img
                    style={{
                        maxHeight:"600px",
                    }}
                    src="https://cdn.shopify.com/s/files/1/0426/9209/articles/Copy_of_tamano_imagenes_blog_posts_6_1024x768.png?v=1595441097"
                />
            </div>
        </Carousel>
    );

}

export default Carrousel