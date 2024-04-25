import Footer from "../Components/Homepage/Footer";
import Header from "../Components/Homepage/Header";
import Portfolio from "../Components/Homepage/Portfolio";
import Details from "../Components/Homepage/Details"
import Pillars from "../Components/Homepage/Pillars";
import Contact from "../Components/Homepage/Contact";

export default function Homepage() {
    return (
        <div>
            <Header />
            <Pillars/>
            <Details/>
            <Portfolio />
            <Contact/>
            <Footer/>
        </div>
    )
}
