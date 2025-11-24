import cl from './GoodsCard.module.css'

import MyButton from '../UI/MyButton/MyButton';

const GoodsCard = ({ goodImgRef, goodName, goodPrice }) => {
    return (
        <div className={cl.GoodsCard}>
            <div className={cl.ImageWrapper}>
                <img
                    className={cl.Image} 
                    src={goodImgRef}
                    alt={goodName }
                />
            </div>
            <h1 className={cl.Name}>{goodName}</h1>
            <p className={cl.Price}>{goodPrice}</p>
            <MyButton text={"Додати у кошик"}/>
        </div>
    );
}
 
export default GoodsCard;