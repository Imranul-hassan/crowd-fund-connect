import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
const MyCampaign = () => {
    const myCampaign = useLoaderData();
    const {user} = useContext(AuthContext)

    const handleDelete= (_id) =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
              fetch(`http://localhost:5000/campaign/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your campaign has been deleted.",
                        icon: "success"
                    });
                }
              })
            }
          });
    }
    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold text-center mb-8">My Campaigns</h2>
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
                        {
                            myCampaign.map((campaign) => (
                                <tr key={campaign._id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img 
                                            src={campaign.photo} 
                                            alt={campaign.campaign_title} 
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{campaign.campaign_title}</td>
                                    <td className="border border-gray-300 px-4 py-2">{campaign.campaign_type}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">${campaign.amount}</td>
                                    <td className="border border-gray-300 px-4 py-2">{campaign.deadline}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link to={`/my-campaign/${user?.email}/update-campaign/${campaign._id}`}>
                                            <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-md">
                                                Update
                                            </button>
                                        </Link>
                                        <button onClick={()=> handleDelete(campaign._id)}
                                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded-md">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyCampaign;