import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const UpdateCampaign = () => {
    const updateCampaign = useLoaderData()
    const {_id, photo, campaign_title, campaign_type, description, amount, deadline, user_email, user_name } = updateCampaign

    const {user} = useContext(AuthContext);

    const handleUpdateCampaign = event =>{
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const campaign_title = form.campaign_title.value;
        const campaign_type = form.campaign_type.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
       

        const updateCampaign = {photo, campaign_title, campaign_type, description, amount, deadline,user_email, user_name}
        console.log(updateCampaign)

        fetch(`https://crowd-funding-server-rho.vercel.app/campaign/${_id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCampaign)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'sucess!',
                    text: 'Campaign updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
        

    }

    return (
        <div className='bg-[#aee7de] mt-5  mb-10 rounded-lg'>
           <h3 className="text-3xl text-center font-bold py-2">Update Campaign: {campaign_title}</h3>
            <form onSubmit={handleUpdateCampaign}>
                <div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className='font-bold'>Photo URL</label>
                            <input type="text" defaultValue={photo} placeholder="Photo URL" name="photo" className="input input-bordered w-full " />
                        </div>
                        <div className="md:w-1/2">
                        <label className='font-bold'>Campaign title</label>
                            <input type="text" defaultValue={campaign_title} placeholder="Campaign title" name="campaign_title" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                        <label className='font-bold'>Campaign title</label>
                            <select name="campaign_type" className="input input-bordered w-full">
                                <option value="" disabled selected>
                                Select Campaign Type
                                </option>
                                <option value="personal">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative">Creative Ideas</option>
                            </select>
                        </div>
                        <div  className="md:w-1/2">
                             <label className='font-bold'>Description</label>
                            <input type="text" defaultValue={description} placeholder="Description" name="description" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div  className="md:w-1/2">
                            <label className='font-bold'>Minimum donation amount</label>
                            <input type="number" defaultValue={amount} placeholder="Minimum donation amount" name="amount" className="input input-bordered w-full " />
                        </div>
                        <div  className="md:w-1/2">
                            <label className='font-bold'>Deadline</label>
                            <input type="date" defaultValue={deadline} placeholder="Deadline" name="deadline" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className='font-bold'>User Email </label>
                            <input type="text" value={user.email} name="user_email" className="input input-bordered w-full " />
                        </div>
                        <div className="md:w-1/2">
                        <label className='font-bold'> User Name</label>
                            <input type="text" value={user.displayName} name="user_name" className="input input-bordered w-full " />
                        </div>
                    </div>
                    
                </div>
                <div className="p-5">
                    <input type="submit"  value='Update Campaign' className="btn btn-block bg-teal-600 text-white font-bold mb-4"/>
                </div>
            </form>
        </div>
    );
};

export default UpdateCampaign;