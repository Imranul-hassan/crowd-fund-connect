import idea from "../assets/creative.jpg"
import personal from "../assets/personal.jpg"
import startup from "../assets/startup.jpg"
const About = () => {

    return (
        <div className="my-10 ">
            <div className=" pr-4">
                <div className="w-9/12 mx-auto text-center ">
                    <h3 className="font-bold text-xl">About Us</h3>
                    <h1 className="font-semibold text-4xl my-3 ">Empowering Ideas, Transforming Lives</h1>
                    <p>Welcome to [Crowdfunding] – where dreams come alive through the power of community and collaboration. We connect ideas and causes with supporters worldwide, turning aspirations into reality!</p>
                </div>
                <div className=" md:grid grid-cols-3 mt-6 gap-3 animate__animated animate__bounce animate__delay-1s ">

                    <div className="bg-blue-300 shadow-lg p-3 rounded-lg">
                        <div>
                            <img className="w-full h-44 rounded-md" src={personal} alt="" />
                        </div>
                        <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Personal Needs</h1>
                        <p>From medical expenses to education, rally support for life’s most pressing challenges.</p>
                    </div>
                    <div className="bg-purple-200 shadow-lg p-3 rounded-lg">
                        <div>
                            <img className="w-full h-44 rounded-md" src={idea} alt="" />
                        </div>
                        <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Creative Ideas</h1>
                        <p>Turn your passion into impact by funding projects like  art, novels, apps, and more.</p>
                    </div>

                    <div className="bg-orange-300 shadow-lg p-3 rounded-lg ">
                        <div>
                            <img className="w-full h-44 rounded-md" src={startup} alt="" />
                        </div>
                        <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Startups</h1>
                        <p>Transform innovative ideas into thriving businesses with community-driven funding.</p>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default About;