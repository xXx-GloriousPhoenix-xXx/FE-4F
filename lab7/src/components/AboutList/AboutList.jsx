import cl from './AboutList.module.css';

//recolorer = RecolorerComponent with h3
const AboutList = ({listName="", elementList, isOrdered=false, recolorer=null}) => {
    return (
        <div className={cl.Wrapper}>
            {
                recolorer
                ? recolorer
                : <h3>{listName}</h3>
            }
            {
                isOrdered
                ? <ol>
                {
                    elementList.map((el, i) => {
                        return <li key={i}>{el}</li>
                    })
                }
                </ol>
                : <ul>
                {
                    elementList.map((el, i) => {
                        return <li key={i}>{el}</li>
                    })
                }
                </ul>
            }
        </div>
    );
}
 
export default AboutList;