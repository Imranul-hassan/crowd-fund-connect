import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const MyDonation = () => {
    const donations = useLoaderData();
    return (
        <div className=" w-10/12 mx-auto mb-6">

            <h1 className="text-2xl font-bold text-center py-4">My Donations</h1>

            <div className="grid md:grid-cols-3 gap-4">
                {
                    donations.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default MyDonation;