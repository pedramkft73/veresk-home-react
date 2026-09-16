import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import Contact1 from "../Components/Contact/Contact1";
import Faq from "../Components/Faq/Faq";
import Features from "../Components/Features/Features";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const Home = () => {
    return (
        <div className="home-page">
            <Hero1
                bgImg="/assets/images/veresk-harbour-bridge.jpg"
                SubTitle="ENGINEERING • DIGITAL TOOLS • TECHNICAL SOLUTIONS"
                Title="Engineering Smarter Solutions"
                Content="Practical engineering, digital tools and technical solutions designed to solve real-world challenges."
                BtnText="Explore Our Services"
                BtnLink="/service"
                Image="/assets/images/veresk-engineer.png"
                VideoText="Explore Engineering Tools"
            ></Hero1>
            <Features></Features>
            <About1
                MainImg="/assets/images/ai-powered-engineering.jpg"
                ImgTitle="AI-POWERED ENGINEERING"
                SubTitle="AI-POWERED ENGINEERING"
                Title="Smarter Engineering Through AI"
                Content="We develop practical engineering tools powered by AI to simplify calculations, improve workflows and support faster technical decisions."
                listTitle="Engineering Intelligence, Built for Real Workflows"
                BottomText="From design calculations and system selection to project coordination, analysis and technical review."
                BtnUrl="https://veresk.com.au/online-tools/"
                BtnText="Explore Engineering Tools"
            ></About1>
            <Services1></Services1>
            <Project1 
                bgImage="/assets/images/project-bg.png"
                ClassAdd="project-area engineering-tools-area"
                variant="engineering-tools"
            ></Project1>
            <Brand variant="engineering"></Brand>
            <Faq variant="engineering-guidance"></Faq>
            <Testimonial1></Testimonial1>
            <Contact1 variant="home-inquiries"></Contact1>
            <Blog1 variant="wordpress-insights"></Blog1>
        </div>
    );
};

export default Home;
