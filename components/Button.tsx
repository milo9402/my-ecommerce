
const Button = ({children, className, onClick}) => {

    return (
        <button
            className={`p-2 rounded-md font-semibold hover:ring-2 hover:ring-gray-300 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
