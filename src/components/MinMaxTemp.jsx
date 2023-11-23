// COMPONENTS

import ValueUnit from './ValueUnit';

const MinMaxTemp = ({className, min, max, unit}) => {
    return (
        <div className={className}>
            <ValueUnit
                className='small'
                value={min}
                unit={unit}
            />
            -
            <ValueUnit
                className='small'
                value={max}
                unit={unit}
            />
        </div>
    );
};

export default MinMaxTemp;