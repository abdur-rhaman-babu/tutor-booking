const Stats = () => {
    return (
        <div className="max-w-7xl mx-auto py-14">
             <h1 className="text-center font-bold text-3xl mb-5">Stats</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-5 justify-between border-2 p-5 rounded-lg">
            <div className="text-center">
                <p className="font-bold text-xl">32,000+</p>
                <p>Experience Tutors</p>
            </div>
            <div className="text-center">
                <p className="font-bold text-xl">25,000+</p>
                <p>5-star tutor reviews</p>
            </div>
            <div className="text-center">
                <p className="font-bold text-xl">120+</p>
                <p>Subjects Taught</p>
            </div>
            <div className="text-center">
                <p className="font-bold text-xl">180+</p>
                <p>Tutor Nationalities</p>
            </div>
            <div className="text-center">
                <p className="font-bold text-xl">4.8 ⭐⭐⭐⭐⭐</p>
                <p>On the app store</p>
            </div>
        </div>
        </div>
    );
};

export default Stats;