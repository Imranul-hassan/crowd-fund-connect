import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    const campaigns = useLoaderData();
    const handleType = (count) => {
        // Logs each typewriter step count
        console.log(`Current step: ${count}`);
    };

const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

return (
    <div>
        <Slider></Slider>

        <div className=" mb-8">
            <h1 className="text-4xl text-center " style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'bold' }}>
             Ongoing Campaigns{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Personal Needs', 'Creative Ideas', 'Startups']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={(count) => handleType(count)}
                    />
                </span>
            </h1>
            <p className="text-center mx-auto mt-3 text-xl md:w-5/12 ">Explore ongoing campaigns that need your support. Every contribution makes a difference—join the movement today!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
            {

                campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}>

                </CampaignCard>)

            }
        </div>
        <FAQ></FAQ>
    </div>
);
};

export default Home;