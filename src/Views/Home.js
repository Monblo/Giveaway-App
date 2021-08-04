import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Instruction from "./Instruction";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Organizations from "./Organizations/Organizations";

const Home = () => {
    return <div>
        <HomeHeader />
        <HomeThreeColumns />
        <Instruction />
        <AboutUs />
        <Organizations />
        <Footer />
    </div>
}

export default Home

