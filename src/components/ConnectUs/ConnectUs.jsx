import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { MdContactPage } from "react-icons/md";
import { PiSelectionAllFill } from "react-icons/pi";

const ConnectUs = () => {
    return (
        <div className="py-10">
            <h1 className="text-3xl text-center font-bold my-5">The ways Tutors can connect with us.</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white dark:bg-black border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><CgProfile size={45}/></button>
                    <h3 className="font-bold text-xl my-3">Create Profile</h3>
                    <p>Create your profile in minutes with sign up information.</p>
                </div>
                <div className="bg-white dark:bg-black border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><ImProfile size={45}/></button>
                    <h3 className="font-bold text-xl my-3">Create Tutor</h3>
                    <p>Create you teaching experience and add your language and skills.</p>
                </div>
                <div className="bg-white dark:bg-black border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><MdContactPage size={45} /></button>
                    <h3 className="font-bold text-xl my-3">Start tutoring</h3>
                    <p>Be confident in the first meet & start tutoring.</p>
                </div>
                <div className="bg-white dark:bg-black border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><PiSelectionAllFill size={45}/></button>
                    <h3 className="font-bold text-xl my-3">Select Yout Student</h3>
                    <p>Evaluate suggested student & start teaching with your favorite one.</p>
                </div>
                
            </div>
        </div>
    );
};

export default ConnectUs;