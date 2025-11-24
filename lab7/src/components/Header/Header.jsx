import cl from './Header.module.css';

import Education from '../Education/Education';
import AboutList from '../AboutList/AboutList';
import Recolorer from '../Recolorer/Recolorer';

const Header = () => {
    const defaultColors = {
        bg: 'transparent',
        fg: 'var(--secondarycol)'
    };
    const newColors = {
        bg: 'var(--secondarycol)',
        fg: 'var(--primarycol)'
    };

    return (
        <div className={cl.Wrapper}>
            <Education
                defaultColors={defaultColors}
                newColors={newColors}
            />
            <AboutList 
                elementList={[
                    "Малювання",
                    "Програмування",
                    "Відеоігри"
                ]}
                recolorer={
                    <Recolorer
                        defaultColors={defaultColors}
                        newColors={newColors}
                    >
                        <h3>Хобі</h3>
                    </Recolorer>
                }
                isOrdered={false}
            />
            <AboutList
                listName="Улюблені фільми"
                elementList={[
                    "Твоє ім'я",
                    "Форма голосу",
                    "Дитя погоди"
                ]}
                isOrdered={true}
            />
        </div>
    );
}
 
export default Header;