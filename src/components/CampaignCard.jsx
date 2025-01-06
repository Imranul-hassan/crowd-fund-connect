import { Link } from "react-router-dom";

const CampaignCard = ({campaign}) => {
    
    const { photo, campaign_title, campaign_type, description, amount, deadline } = campaign;

    return (
        <div>
            <div className="card bg-white  shadow-2xl rounded-2xl mb-5">
                <figure className="w-full h-52 p-4 ">
                    <img src={photo} alt={campaign_title} className="w-full h-full rounded-lg object-cover" />
                </figure>
                <div className="card-body p-6">
                    <h2 className="card-title text-lg font-semibold text-gray-800">{campaign_title}</h2>
                    <p className="text-sm text-gray-500 mt-1 ">{campaign_type}</p>
                    <p className="text-sm font-semibold text-gray-700">
                        <span className="font-bold">Amount:</span> ${amount}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                        <span className="font-bold">Deadline:</span> {new Date(deadline).toLocaleDateString()}
                    </p>
                   
                    <div className="card-actions mt-3 ">
                        <Link to={`campaign-details/${campaign._id}`}>
                            <button className="text-base btn text-white bg-teal-800 hover:bg-teal-600 rounded-full py-1 px-16">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;