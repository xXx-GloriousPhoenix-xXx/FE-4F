import ColorSwapper from "../ColorSwapper/ColorSwapper";
import React, { Component } from "react";

import cl from "./Content.module.css";

class Content extends Component {
    render() {
        const { clickColor, clickBgColor } = this.props;

        return (
            <div className={cl.Wrapper}>
                <div>
                    <ColorSwapper 
                        clickColor={clickColor}
                        clickBgColor={clickBgColor}
                    >
                        <h3>Хобі</h3>
                    </ColorSwapper>
                    <ul>
                        <li>Малювання</li>
                        <li>Програмування</li>
                        <li>Відеоігри</li>
                    </ul>
                </div>
                <div>
                    <h3>Улюблені фільми</h3>
                    <ol>
                        <li>Твоє ім'я</li>
                        <li>Форма голосу</li>
                        <li>Дитя погоди</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Content;