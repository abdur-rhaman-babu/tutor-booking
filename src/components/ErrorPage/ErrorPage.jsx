import { useNavigate } from "react-router-dom";
import not_found from '../../assets/Image/not_found.png'
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="font-bold text-2xl">Oops! Page Not Found</h1>
                <img className="h-56" src={not_found} alt="" />
                <button onClick={()=>navigate('/')} className="p-2 text-white hover:bg-blue-600 duration-300 border-2 rounded-lg bg-primary">Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;