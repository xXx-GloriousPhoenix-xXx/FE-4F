import cl from './Main.module.css'

import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Image from '../../components/Image/Image';

import ImageEditor from '../../components/ImageEditor/ImageEditor';
import GoodsList from '../../components/GoodsList/GoodsList';

import useGoods from '../../hooks/useGoods';

const Main = () => {
    
    const goodsPropList = useGoods();

    return (  
        <div className={cl.Main}>
            <Header clickColor={"black"} clickBgColor={"orange"}/>
            <Content clickColor={"white"} clickBgColor={"green"}/>
            <Image/>
            <ImageEditor/>
            <div>
                <GoodsList propList={goodsPropList}/>
            </div>
        </div>
    );
}
 
export default Main;