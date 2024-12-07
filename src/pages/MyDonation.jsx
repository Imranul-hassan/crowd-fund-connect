import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const MyDonation = () => {
    const donations = useLoaderData();
    return (
        <div>
            <div className=" text-center py-6">
                <h1 className="text-4xl font-bold text-gray-800">Donate to Make a Difference</h1>
                <p className="text-lg text-gray-600 mt-2">Every contribution helps bring hope to those in need.</p>
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