import { useState } from "react";

import cl from './Recolorer.module.css';

const Recolorer = ({children, defaultColors, newColors}) => {
    const [isRecolored, setRecolored] = useState(false);
    const [colors, setColors] = useState(defaultColors);
    const handleRecolor = () => {
        if (isRecolored) {
            setColors(defaultColors);
            setRecolored(false);
        }
        else {
            setColors(newColors);
            setRecolored(true);
        }
    }
    return (
        <div 
            className={cl.Wrapper}
            onClick={handleRecolor}
            style={{
                backgroundColor: colors.bg,
                color: colors.fg
            }}
        >
            {children}
        </div>
    );
}
 
export default Recolorer;