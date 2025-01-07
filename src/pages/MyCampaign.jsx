import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";

const MyCampaign = () => {
    const myCampaign = useLoaderData();
    const {user} = useContext(AuthContext)

    const [campaigns, setCampaigns] = useState(myCampaign)

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
            
              fetch(`https://crowd-funding-server-rho.vercel.app/campaign/${_id}`,{
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
                    })
                    const remaining = campaigns.filter((camp) => camp._id !== _id);
                    setCampaigns(remaining);
                }
              })
            }
          });
    }
    return (
        <div className=" w-10/12 mx-auto mb-10">
            <h2 className="text-2xl font-bold text-center p-5">My Campaigns</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-slate-100 text-black">
                            <th className="border border-gray-300 px-3 py-2">#</th>
                            <th className="border border-gray-300 px-3 py-2">Photo</th>
                            <th className="border border-gray-300 px-3 py-2">Title</th>
                            <th className="border border-gray-300 px-3 py-2">Type</th>
                            <th className="border border-gray-300 px-3 py-2">Minimum Amount</th>
                            <th className="border border-gray-300 px-3 py-2">Deadline</th>
                            <th className="border border-gray-300 px-3 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-50 text-black">
                        {
                            campaigns.map((campaign, index) => (
                                <tr key={campaign._id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img 
                                            src={campaign.photo} 
                                            alt={campaign.campaign_title} 
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-3 py-2">{campaign.campaign_title}</td>
                                    <td className="border border-gray-300 px-3 py-2">{campaign.campaign_type}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">${campaign.amount}</td>
                                    <td className="border border-gray-300 px-3 py-2">{campaign.deadline}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">
                                        <Link to={`/my-campaign/${user?.email}/update-campaign/${campaign._id}`}>
                                            <button className="btn btn-sm text-xl bg-teal-600 text-white hover:bg-teal-600 rounded-md">
                                            <MdBrowserUpdated />
                                            </button>
                                        </Link>
                                        <button onClick={()=> handleDelete(campaign._id)}
                                        className="btn btn-sm text-xl bg-red-500 ml-2 text-white hover:bg-red-600 rounded-md">
                                          <MdDeleteForever />
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