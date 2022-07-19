import { useState } from "react";

const ButtonGroup = () => {
    const [productQuantity, setProductQuantity] = useState(0);

    return (
        <div
            className="flex flex-row justify-center"
        >
            <button
                className={`hover:ring-2 rounded-lg bg-indigo-400 hover:ring-indigo-400 w-7 h-7 text-center`}
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
                className={`hover:ring-2 rounded-lg bg-indigo-400 hover:ring-indigo-400 w-7 h-7 text-center`}
                onClick={()=> setProductQuantity(productQuantity+1)}
            >
                +
            </button>
        
        </div>
        
    )
}

export default ButtonGroup;
