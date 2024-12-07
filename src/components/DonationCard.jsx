

const DonationCard = ({donation}) => {
    const { photo, campaign_title, campaign_type, description, amount, deadline, user_email, user_name } = donation;
    return (
        <div>
          <div className="card bg-white  shadow-2xl rounded-2xl mb-5">
                <figure className="w-full h-48 p-4 ">
                    <img src={photo} alt={campaign_title} className="w-full h-full rounded-lg object-cover" />
                </figure>
                <div className="card-body p-6">
                    <h2 className="card-title text-xl font-bold text-gray-800">{campaign_title}</h2>
                    <p className="text-sm text-gray-500 mt-1 ">{campaign_type}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                    <p className="text-sm font-semibold text-gray-700">
                        <span className="font-bold">Amount:</span> ${amount}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                        <span className="font-bold">Deadline:</span> {new Date(deadline).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;