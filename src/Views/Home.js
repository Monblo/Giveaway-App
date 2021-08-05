import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import Instruction from "../components/Instruction";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Organizations from "../components/Organizations/Organizations";

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

