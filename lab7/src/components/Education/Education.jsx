import cl from './Education.module.css'

import Recolorer from '../Recolorer/Recolorer';

const Education = ({defaultColors, newColors}) => {
    return (
        <div className={cl.Wrapper}>
            <h2>Приходько Роман Юрійович</h2>
            <p>Народився 09.01.2006 у місті Краматорськ</p>
            
            <Recolorer
                defaultColors = {defaultColors}
                newColors = {newColors}
            >
                <p>
                    Базова освіта - Краматорський ліцей №35 імені В. Шеймана
                    <br/>
                    Вища освіта - НТУУ "КПІ імені Ігоря Сікорського"
                </p>
            </Recolorer>
        </div>
    );
}
 
export default Education;