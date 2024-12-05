import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
    const loadCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadCampaigns);

    return (
        <div className="m-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Campaign Title</th>
                        <th>Campaign Type</th>
                        <th>Donation Amount</th>
                        <th>User Email</th>
                        <th>User Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    {
                        campaigns.map(campaign =>
                            <tr key={campaign._id} >
                                
                                <td>{campaign.campaign_title}</td>
                                <td>{campaign.campaign_type}</td>
                                <td>{campaign.amount}</td>
                                <td>{campaign.user_email}</td>
                                <td>{campaign.user_name}</td>
                                {/* <Link to={campaign_details/campaign._id}>See More</Link> */}
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