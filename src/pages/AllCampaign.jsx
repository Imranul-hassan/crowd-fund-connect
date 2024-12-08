import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
    const loadCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadCampaigns);
    const handleSortByPrice = () => {
        const sortedCampaigns = [...campaigns].sort((a, b) => b.amount - a.amount);
        setCampaigns(sortedCampaigns);
    };

    return (
        <div className="mb-10">
            <h3 className="text-2xl text-center font-bold py-2 ">All Campaigns</h3>
            <button onClick={handleSortByPrice} className="btn bg-teal-600 text-white mb-2 font-bold">Sort By Price</button>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-slate-500 text-white">
                            <th className="border border-gray-300 px-3 py-2">Serial</th>
                            <th className="border border-gray-300 px-3 py-2">Campaign Title</th>
                            <th className="border border-gray-300 px-3 py-2">Campaign Type</th>
                            <th className="border border-gray-300 px-3 py-2">Donation Amount</th>
                            <th className="border border-gray-300 px-3 py-2">Campaign Creator Email</th>
                            <th className="border border-gray-300 px-3 py-2">Name</th>
                            <th className="border border-gray-300 px-3 py-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            campaigns.map((campaign, index) =>
                                <tr key={campaign._id} >
                                    <td className="border border-gray-300 px-3 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-3 py-2">{campaign.campaign_title}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{campaign.campaign_type}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{campaign.amount}</td>
                                    <td className="border border-gray-300 px-3 py-2">{campaign.user_email}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{campaign.user_name}</td>
                                    <td className="border border-gray-300 px-3 py-2">
                                        <Link to={`/campaign-details/${campaign._id}`}>
                                            <button className="btn bg-emerald-600 rounded-lg text-white text-base">See More</button>
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