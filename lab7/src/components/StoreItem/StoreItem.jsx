import cl from './StoreItem.module.css';

const StoreItem = ({content}) => {
    return (
        <div className={cl.Wrapper}>
            <div className={cl.Image}>
                <img src={content.ref} alt='store-item' />
                <p>{content.price}</p>
            </div>
            <div className={cl.Description}>
                <h3>{content.name}</h3>
            </div>
            <button className={cl.Button}>Додати до кошику</button>
        </div>
    );
}
 
export default StoreItem;