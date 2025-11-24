import cl from './Store.module.css'

import { useStore } from '../../hooks/useStore';

import StoreItem from '../StoreItem/StoreItem';

const Store = () => {
    const { itemList } = useStore();
    
    return (
        <div className={cl.Wrapper}>
            {
                itemList.map((content, i) => {
                    return <StoreItem content={content} key={i} />
                })
            }
        </div>
    );
}
 
export default Store;