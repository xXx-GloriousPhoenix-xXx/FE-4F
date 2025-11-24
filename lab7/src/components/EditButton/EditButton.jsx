import cl from './EditButton.module.css';

const EditButton = ({onClick, text, disabled, opacity, cursor}) => {
    return (
        <button 
            className={cl.Button}
            onClick={onClick}
            disabled={disabled}
            style={{
                opacity: opacity,
                cursor: cursor
            }}
        >
            {text}
        </button>
    );
}
 
export default EditButton;