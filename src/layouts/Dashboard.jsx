import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='flex flex-col md:flex-row  mx-auto max-w-[380px] md:max-w-screen-2xl  '>

            <div className=' w-48 md:w-48 lg:w-64 min-h-min md:min-h-screen bg-[#109e95]'>
                <div className='flex justify-center my-3 gap-4 items-center'>
                    {/* <img className='w-16' src={logo} alt="" /> */}
                    <h2 className='text-xl text-white font-semibold'>Task Management</h2>
                </div>
                <div className='border-b-2'></div>
                <ul className='menu p-4'>
                    {
                       user && <div>
                            <NavLink to="/ok" className="text-sm md:text-base text-white font-medium">
                            <FaHome></FaHome>
                            ok
                        </NavLink>
                       </div>
                    }

                    {/* shared navLinks */}
                    <div className="divider "></div>

                    <li>
                        <NavLink to="/" className="text-sm md:text-base text-white font-medium">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>

                    {/* <li>
                        <NavLink to="/dashboard/myProfile" className="text-sm md:text-base text-white font-medium">
                            <CgProfile></CgProfile>
                            My profile
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink to="/meals" className="text-sm md:text-base text-white font-medium">
                            <FaSearch></FaSearch>
                            Meals
                        </NavLink>
                    </li> */}

                </ul>
            </div>
            <div className=' flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;