import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';

const AddNewCampaign = () => {
    const {user} = useContext(AuthContext);

    const handleAddCampaign = event =>{
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
       

        const newCampaign = {photo, campaign_title, campaign_type, description, amount, deadline,user_email, user_name}
        console.log(newCampaign)

        fetch('https://crowd-funding-server-rho.vercel.app/campaign',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'sucess!',
                    text: 'Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
        

    }
    return (
        <div className='bg-[#d9edea] m-5 rounded-lg'>
           <h3 className="text-2xl text-center font-bold py-2">Add New Campaign</h3>
            <form onSubmit={handleAddCampaign}>
                <div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className='font-bold'>Photo URL</label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full " />
                        </div>
                        <div className="md:w-1/2">
                        <label className='font-bold'>Campaign title</label>
                            <input type="text" placeholder="Campaign title" name="campaign_title" className="input input-bordered w-full " />
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
                            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div  className="md:w-1/2">
                            <label className='font-bold'>Minimum donation amount</label>
                            <input type="number" placeholder="Minimum donation amount" name="amount" className="input input-bordered w-full " />
                        </div>
                        <div  className="md:w-1/2">
                            <label className='font-bold'>Deadline</label>
                            <input type="date" placeholder="Deadline" name="deadline" className="input input-bordered w-full " />
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
               <div className='p-5'>
                    <input type="submit"  value='Add New Campaign' className="btn btn-block bg-[#2AB8A6] mb-4 text-white "/>
               </div>
            </form>
        </div>
    );
};

export default AddNewCampaign;