import cl from "./MyInput.module.css"

const MyInput = ({placeholder, value, onChange}) => {
    return ( 
        <input 
            className={cl.MyInput}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}
 
export default MyInput;