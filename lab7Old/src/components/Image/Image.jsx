import cl from './Image.module.css';

import kharkivImg from "../../assets/img/kharkiv.jpg";

const Image = () => {
    return (  
        <div className={cl.Wrapper}>
            <div className={cl.TextWrapper}>
                <p className={cl.Paragraph}>
                    Харків – величне та славетне місто, що розкинулося на сході України. 
                    Це друге за кількістю мешканців місто України і йому є чим здивувати гостей. 
                    Могутнє, світле, мальовниче. Красується, милує людське око.
                </p>
                <p className={cl.Paragraph}>
                    Не дарма Харків колись мав честь бути столицею України. 
                    І хоч не так довго, але залишив свій слід у історії нашої держави. 
                    Та радянські часи минули й столицю перенесли, але місто, 
                    як потужний промисловий центр, функціонує і далі, збагачує країну. 
                    Також Харків – це центр наукового та студентського самоврядування.
                </p>
            </div>
            <div className={cl.ImageWrapper}>
                <a href="https://tripmydream.ua/ukraine/kharkiv/gallery">Сайтик</a>
                <img 
                    className={cl.Image}
                    src={kharkivImg}
                    alt="Харків"
                />
            </div>
        </div>
    );
}
 
export default Image;