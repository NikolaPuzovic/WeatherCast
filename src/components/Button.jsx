const Button = ({className, children, onClick = null}) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;