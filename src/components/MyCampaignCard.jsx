
const MyCampaignCard = ({myCampaign}) => {
    console.log(myCampaign)
    const handleDelete= (_id) =>{
        console.log(_id)
    }
    return (
        <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Photo</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Minimum Amount</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img 
                                            src={myCampaign.photo} 
                                            alt={myCampaign.campaign_title} 
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{myCampaign.campaign_title}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myCampaign.campaign_type}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">${myCampaign.amount}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myCampaign.deadline}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-md">
                                            Update
                                        </button>
                                        <button onClick={()=> handleDelete(_id)}
                                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded-md">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))

                        
                    </tbody>
                </table>
            </div>
    );
};

export default MyCampaignCard;