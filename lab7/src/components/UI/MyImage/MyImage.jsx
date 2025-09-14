import cl from "./MyImage.module.css"

const MyImage = ({path = "/img/kharkiv-cut.png", startSize = 400, deltaSize = 0}) => {
    return (  
        <img 
            className={cl.MyImage}
            src={path} 
            alt={path}
            style={{ width: startSize + deltaSize + "px" }}
        />
    );
}
 
export default MyImage;