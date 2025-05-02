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
            
            <div style={{ marginTop: "60px" }}>
                <Banner />
                <Team/>
                <FeatureCards/>
                <Services />
                <Gallery/>
                <NewsLetter/>
                <Blog/>
                <Reviews/>
                

            </div>
        </div>
    );
}
