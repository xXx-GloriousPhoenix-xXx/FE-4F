import { useState } from "react";
import goodsData from '../data/goods.json';

export const useStore = () => {
    const [itemList, setItemList] = useState([]);
    
    useState(() => {
        setItemList(goodsData.map(content => ({
            ...content,
            price: `${content.price} ₴`
        })));
    }, []);

    return { itemList, setItemList };
}