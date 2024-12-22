import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="font-bold text-2xl">Not Found 404</h1>
                <button onClick={()=>navigate('/')} className="p-2 border-2 rounded-lg">Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;