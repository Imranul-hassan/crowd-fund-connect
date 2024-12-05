import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import Slider from "../components/Slider";

const Home = () => {
    const campaigns = useLoaderData();
    return (
        <div>
           <Slider></Slider>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    
                    campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}>

                    </CampaignCard>)
                  
                }  
            </div>
        </div>
    );
};

export default Home;