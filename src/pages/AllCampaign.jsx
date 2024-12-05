import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
    const loadCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadCampaigns);

    return (
        <div className="m-10">
            <div className="overflow-x-auto">
                <table className="table">
                  
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Campaign Title</th>
                            <th className="border border-gray-300 px-4 py-2">Campaign Type</th>
                            <th className="border border-gray-300 px-4 py-2">Donation Amount</th>
                            <th className="border border-gray-300 px-4 py-2">User Email</th>
                            <th className="border border-gray-300 px-4 py-2">User Name</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {
                        campaigns.map(campaign =>
                            <tr key={campaign._id} >
                                
                                <td className="border border-gray-300 px-4 py-2">{campaign.campaign_title}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.campaign_type}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.amount}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.user_email}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.user_name}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link to={`/campaign-details/${campaign._id}`}>
                                        <button className="btn btn-primary">See More</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;