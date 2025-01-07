import { useLoaderData } from "react-router-dom";

const MyDonation = () => {
    const donations = useLoaderData();
    return (
        <div className=" w-10/12 mx-auto mb-6">

            <h1 className="text-2xl font-bold text-center py-4">My Donations</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-slate-50 text-black">
                            <th className="border border-gray-300 px-3 py-2">#</th>
                            <th className="border border-gray-300 px-3 py-2">Photo</th>
                            <th className="border border-gray-300 px-3 py-2">Title</th>
                            <th className="border border-gray-300 px-3 py-2">Type</th>
                            <th className="border border-gray-300 px-3 py-2">Donation Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody className="bg-white text-black">
                        {
                            donations.map((donation, index) => (
                                <tr key={donation._id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img 
                                            src={donation.photo} 
                                            alt={donation.campaign_title} 
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{donation.campaign_title}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{donation.campaign_type}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">${donation.amount}</td>
                                    
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyDonation;