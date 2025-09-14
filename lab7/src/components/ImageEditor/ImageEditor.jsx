import { useState } from "react";

import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MyImage from "../UI/MyImage/MyImage";

import cl from "./ImageEditor.module.css"

import kharkivImg from "../../assets/img/kharkiv-cut.png"

const ImageEditor = () => {
    const [deltaSize, setDeltaSize] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [imageRef, setImageRef] = useState(kharkivImg);
    const handleResize = (change) => {
        setDeltaSize(deltaSize + change);
    }
    const handleRefChange = () => {
        setImageRef(inputValue);
    }
    const handleClear = () => {
        setImageRef("");
    }
    return ( 
        <div className={cl.ImageEditor}>
            <div className={cl.ControlWrapper}>
                <MyButton text={"Додати"} onClick={() => handleRefChange()}/>
                <MyButton text={"Збільшити"} onClick={() => handleResize(50)}/>
                <MyButton text={"Зменшити"} onClick={() => handleResize(-50)}/>
                <MyButton text={"Видалити"} onClick={() => handleClear()}/>
                <MyInput
                    placeholder={"Посилання..."}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <MyImage startSize={400} deltaSize={deltaSize} path={imageRef}/>
        </div>
    );
}
 
export default ImageEditor;