import cl from "./MyButton.module.css"

const MyButton = ({ text, onClick }) => {
    return ( 
        <button 
            className={cl.MyButton}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
 
export default MyButton;