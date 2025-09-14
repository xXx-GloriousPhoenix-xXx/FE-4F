import { useState } from 'react';

const ColorSwapper = ({ children, clickColor, clickBgColor }) => {
    const [isSwapped, setIsSwapped] = useState(false);
    const handleClick = () => setIsSwapped(!isSwapped);
    return (  
        <div 
            onClick={handleClick}
            style={
                isSwapped 
                ? { color: clickColor, backgroundColor: clickBgColor } 
                : { color: 'black', backgroundColor: 'white' }
            }
        >
            {children}
        </div>
    );

}
 
export default ColorSwapper;