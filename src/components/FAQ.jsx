
const FAQ = () => {
    return (
        <div id="faq" className=" p-5 my-10">
            <div className="md:w-7/12 mx-auto mb-7">
                <h1 className="font-bold text-3xl text-center">Quick Answers for a Seamless Experience</h1>
                <p className="mt-4">Explore answers to frequently asked questions and make the most of your crowdfunding experience.</p>
            </div>
           <div className="md:w-8/12 mx-auto ">
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How do I register on the website?</div>
                    <div className="collapse-content">
                        <p>Register by providing your name, email, password, and photo URL.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100  my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do I add a new campaign?</div>
                    <div className="collapse-content">
                        <p>Go to the Add New Campaign page and fill in the campaign details before clicking Add. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> Can I update or delete my campaign?</div>
                    <div className="collapse-content">
                        <p>Yes, you can update or delete campaigns from your My Campaigns page.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100  my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> How do I donate to a campaign?</div>
                    <div className="collapse-content">
                        <p>Visit the Campaign Details page and click Donate Now to contribute.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 mb-10">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I view my past donations?</div>
                    <div className="collapse-content">
                        <p>Yes, you can see all your donations on the My Donations page.</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default FAQ;