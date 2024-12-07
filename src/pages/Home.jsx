import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";


const Home = () => {
    const campaigns = useLoaderData();
    return (
        <div>
           <Slider></Slider>
           <div className="mt-10 mb-8">
                <h3 className="text-4xl font-bold text-center">Still Time to Give: Ongoing Campaigns</h3>
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