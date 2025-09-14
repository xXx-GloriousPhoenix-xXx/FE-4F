import GoodsCard from '../GoodsCard/GoodsCard';
import cl from './GoodsList.module.css'

import { useMemo } from 'react';

const GoodsList = ({ propList }) => {
    const goods = useMemo(() => propList.map((item, index) => {
        return <GoodsCard
            key={index}
            goodImgRef={item.ref}
            goodName={item.name}
            goodPrice={`${item.price}₴`}
        />
    }), [propList]);

    return <div className={cl.GoodsList}>{goods}</div>;
}
 
export default GoodsList;