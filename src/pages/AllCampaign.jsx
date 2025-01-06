import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

const AllCampaign = () => {
    const loadCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadCampaigns);
    const handleSortByPrice = () => {
        const sortedCampaigns = [...campaigns].sort((a, b) => b.amount - a.amount);
        setCampaigns(sortedCampaigns);
    };

    return (
        <div className="mb-10 w-10/12 mx-auto">
            <h3 className="text-2xl text-center font-bold py-2 ">All Campaigns</h3>
            <button onClick={handleSortByPrice} className="btn bg-teal-700 text-white mb-2 font-bold">Sort By Price</button>
            <div  className="grid md:grid-cols-4 gap-3">
                {
                    campaigns.map(campaign => <Card key={campaign._id} campaign={campaign}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCampaign;