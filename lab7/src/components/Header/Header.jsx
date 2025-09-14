import cl from './Header.module.css'

import ColorSwapper from "../ColorSwapper/ColorSwapper";

const Header = ({ clickColor, clickBgColor }) => {
    return (  
        <div className={cl.Header}>
            <h2 className={cl.Name}>Приходько Роман Юрійович</h2>
            <p>Народився 09.01.2006 у місті Краматорськ</p>
            <ColorSwapper clickColor={clickColor} clickBgColor={clickBgColor}>
                Базова освіта - Краматорський ліцей №35 імені В. Шеймана
                <br/>
                Вища освіта - НТУУ "КПІ імені Ігоря Сікорського"
            </ColorSwapper>
        </div>
    );
}
 
export default Header;