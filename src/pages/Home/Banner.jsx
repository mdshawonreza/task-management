import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div>
            <div className="hero w-full h-[30vh] md:h-[100vh]" style={{ backgroundImage: 'url(https://i.ibb.co/0sT9wz6/dreamstime-xxl-177798453.jpg)', }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="  text-center ">
                    <div className="max-w-xl text-white">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold"> Boost Your Efficiency!</h1>
                        <p className="mb-5 text-sm md:text-base">Ditch daily chaos, unlock peak efficiency. Conquer tasks, crush goals. Do more, achieve more. Your productivity powerhouse awaits.</p>
                        <div className="form-control  ">
                            <div className="join flex justify-center">
                                <Link to={'/dashboard'}>
                                    <button className="btn px-5 py-1 btn-lg btn-outline btn-warning">Let’s Explore  <FaArrowRight></FaArrowRight> </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;