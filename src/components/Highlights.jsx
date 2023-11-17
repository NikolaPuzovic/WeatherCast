import Icon from './Icon';
import Text from './Text';
import ValueUnit from './ValueUnit';

const Highlights = ({text, icon, value, unit}) => {
    return (
        <div className='highlights'>
            <Icon
                src={icon}
                alt={text}
                className='icon_small'
            />
            <Text className='text_m'>
                {text}
            </Text>
            <ValueUnit
                value={value}
                unit={unit}
                className='small'
            />
        </div>
    );
};

export default Highlights;