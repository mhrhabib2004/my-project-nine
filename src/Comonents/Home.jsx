
import { Helmet } from "react-helmet-async";
import ChooseUs from "./ChooseUs";
import Estates from "./Estates";
import Slider from "./Slider";
import Team from "./Team";




const Home = () => {
    
    return (
        <div>
            <Helmet><title>Home Press || Home</title></Helmet>
            
            <Slider></Slider>
            <Estates></Estates>
            <ChooseUs></ChooseUs>
            <Team></Team>
            
        </div>
    );
};

export default Home;