import { Banner } from "../../components/banner";
import { Blog } from "../../components/blog";
import FeatureCards from "../../components/fetaureCard";
import Footer from "../../components/footer";
import { Gallery } from "../../components/gallery";
import { Navbar } from "../../components/navbar";
import { NewsLetter } from "../../components/newsLetter";
import Reviews from "../../components/reviews";
import { Services } from "../../components/services";
import { Team } from "../../components/team";

export function Home() {
    return (
        <div>
            <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
                <Navbar />
            </div>
            <div style={{ marginTop: "60px" }}>
                <Banner />
                <Team/>
                <FeatureCards/>
                <Services />
                <Gallery/>
                <NewsLetter/>
                <Blog/>
                <Reviews/>
                <Footer/>

            </div>
        </div>
    );
}
