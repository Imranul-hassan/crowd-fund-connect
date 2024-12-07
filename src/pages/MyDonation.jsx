import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const MyDonation = () => {
    const donations = useLoaderData();
    return (
        <div className="mb-6">
            <div className=" text-center py-4">
                <h1 className="text-2xl font-bold text-gray-800">My Donations</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {
                donations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
            }
            </div>
        </div>
    );
};

export default MyDonation;