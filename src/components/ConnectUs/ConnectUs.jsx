import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { MdContactPage } from "react-icons/md";
import { PiSelectionAllFill } from "react-icons/pi";

const ConnectUs = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-3xl text-center font-bold my-5">The ways Parents/Students can connect with us.</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><CgProfile size={45}/></button>
                    <h3 className="font-bold text-xl my-3">Create Profile</h3>
                    <p>Create a profile to get more learning benefits from our website.</p>
                </div>
                <div className="border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><ImProfile size={45}/></button>
                    <h3 className="font-bold text-xl my-3">Submit requirements</h3>
                    <p>Fill up expected tutor requirements & submit the request.</p>
                </div>
                <div className="border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><MdContactPage size={45} /></button>
                    <h3 className="font-bold text-xl my-3">Get Tutors' CV</h3>
                    <p>Based on your requirements, we will provide some experienced tutors' CVs</p>
                </div>
                <div className="border-2 shadow-lg rounded-lg p-4 text-center">
                    <button className="text-center"><PiSelectionAllFill size={45}/></button>
                    <h3 className="font-bold text-xl my-3">Select Yout Tutor</h3>
                    <p>Evaluate suggested tutors & start learning with your favorite one.</p>
                </div>
                
            </div>
        </div>
    );
};

export default ConnectUs;