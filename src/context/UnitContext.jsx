import { createContext, useContext, useState } from 'react';

const UnitContext = createContext(null);

export const UnitTypeProvider = ({children}) => {

    const [unitType, setUnitType] = useState('metric');

    const toggleUnitType = () => {
        setUnitType(prevType => prevType === 'metric' ? 'imperial' : 'metric');
    };

    return (
        <UnitContext.Provider
            value={{unitType, toggleUnitType}}
        >
            {children}
        </UnitContext.Provider>
    );
};

export const useUnitType = () => {
    const context = useContext(UnitContext);

    if(!context) {
        throw new Error(`useUnitType must be used within a UnitTypeProvider`);
    }
    return context;
};