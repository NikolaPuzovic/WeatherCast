const ValueUnit = ({className, value, unit}) => {
    return (
        <p className={className}>
            {value} <span>{unit}</span>
        </p>
    );
};

export default ValueUnit;