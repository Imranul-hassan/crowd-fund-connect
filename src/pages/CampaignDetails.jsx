import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
    const campaignDetails = useLoaderData();
    const {user} = useContext(AuthContext);
    const { photo, campaign_title, campaign_type, description, amount, deadline, user_email, user_name } = campaignDetails;
    const handleDonated = ()=>{
        const user_email = user.email; 
        const user_name = user.displayName;
        const donationData =  { photo, campaign_title, campaign_type, description, amount, deadline, user_email, user_name };
        fetch('https://crowd-funding-server-rho.vercel.app/my-donation',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(donationData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'sucess!',
                    text: 'Donated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card bg-white w-96 shadow-xl rounded-lg">
                <figure className="w-full h-48 p-4">
                    <img src={photo} alt={campaign_title} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-6">
                    <h2 className="card-title text-xl font-bold text-gray-800">{campaign_title}</h2>
                    <p className="text-sm text-gray-500 mt-1 mb-3">{campaign_type}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                    <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700">
                            <span className="font-bold">Amount:</span> ${amount}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                            <span className="font-bold">Deadline:</span> {new Date(deadline).toLocaleDateString()}
                        </p>
                    </div>
                    <hr className="my-4" />
                    <div className="text-sm text-gray-500">
                        <p>
                            <span className="font-bold">Organizer:</span> {user.displayName}
                        </p>
                        <p>
                            <span className="font-bold">Contact:</span> {user.email}
                        </p>
                    </div>
                    <div className="card-actions mt-6">
                        <button onClick={()=>handleDonated()}
                        className="btn btn-primary w-full text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-4">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;
