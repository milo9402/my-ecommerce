import { useState } from "react";

const ButtonGroup = () => {
    const [productQuantity, setProductQuantity] = useState(0);

    return (
        <div
            className="flex flex-row justify-center"
        >
            <button
                className={`hover:ring-2 rounded-full bg-gray-300 hover:ring-gray-300 w-5 h-5 text-center`}
                onClick={()=> setProductQuantity(productQuantity > 0 ? productQuantity-1: productQuantity)}
            >
                -
            </button>
            <p
                className="form-control text-center w-7 "
                >
                {productQuantity}
            </p>
            <button
                className={`hover:ring-2 rounded-full bg-gray-300 hover:ring-gray-300 w-5 h-5 text-center`}
                onClick={()=> setProductQuantity(productQuantity+1)}
            >
                +
            </button>
        
        </div>
        
    )
}

export default ButtonGroup;
