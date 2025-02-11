import { FaHandHoldingHeart } from "react-icons/fa";
import { FaNfcSymbol } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";

const DiscoverTutor = () => {
    return (
        <div className="py-10">
            <h1 className="text-center font-bold text-3xl mb-5">Discover the TutorTime difference</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="text-center bg-white dark:bg-black p-2 rounded-xl border-gray-200 dark:border-gray-700 border">
                    <div className="bg-blue-100 p-3 rounded-full border-2 inline-block">
                    <i className="text-blue-600"><TiWorld size={45} /></i>
                    </div>
                    <h3 className="my-3 text-2xl font-semibold">Freedom of choice</h3>
                    <p>You have the power to choose from hundreds of world-class handpicked expert tutors. The TutorTime app allows you to track bookings, schedule tutorials and communicate with your tutors all in your own time from the comfort of your smartphone.</p>
                </div>
                <div className="text-center bg-white dark:bg-black p-2 rounded-xl border-gray-200 dark:border-gray-700 border">
                    <div className="bg-yellow-100 p-3 rounded-full border-2 inline-block">
                    <i className="text-yellow-800"><FaNfcSymbol size={45} /></i>
                    </div>
                    <h3 className="my-3 text-2xl font-semibold">Guaranteed results</h3>
                    <p>Everyone is different, our lessons are tailored for each student and are mapped to the curriculum. We’re so confident we will find the perfect tutor for you, whether it be a STEM tutor, English tutor or chemistry tutor, that if you are not 100% satisfied we will give you your money back.</p>
                </div>
                <div className="text-center bg-white dark:bg-black p-2 rounded-xl border-gray-200 dark:border-gray-700 border">
                    <div className="bg-green-100 p-3 rounded-full border-2 inline-block">
                    <i className="text-green-600"><FaHandHoldingHeart size={45} /></i>
                    </div>
                    <h3 className="my-3 text-2xl font-semibold">Peace of mind</h3>
                    <p>With TutorTime you can rest easy knowing your child is in the right hands. Each tutor has been referenced checked, police checked and interviewed. Only subject matter experts and top ATAR achievers can join the TutorTime platform – just 1 in 5 who apply make the cut!</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverTutor;