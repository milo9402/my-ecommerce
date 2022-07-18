import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Logo from '@/assets/img/carvajal-favicon.png'

function Carrousel() {
    return (
        <Carousel showThumbs={false} >
            <div>
                <img src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg" />
            </div>
            <div>
                <img src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg" />
            </div>
            <div>
                <img src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg" />
            </div>
        </Carousel>
    );

}

export default Carrousel