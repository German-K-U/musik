import tracksList from "../../assets/tracksList";
import style from "./mainPage.module.scss";
import Track from "../../components/Treck/Track";
import {Input} from "@mui/material";

const MainPage = () => {
        const handleChange = (event) => {
            console.log(event.target.value)
        } 

    return (
     <div className={style.search} >
        <Input 
             className={style.input} 
             placeholder="Поиск треков" 
             onChange={handleChange} 
        />
        <div className={style.list}>
            {tracksList.map((track) =>(
               <Track key = {track.id}  {...track} />
            ))}
        </div>
    </div>
    );
};

export default MainPage;