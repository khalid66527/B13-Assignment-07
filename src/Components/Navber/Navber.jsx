import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome, IoTimeSharp } from "react-icons/io5";
import { NavLink } from 'react-router';
const Navber = () => {
    const Navber = <>
    <li> <NavLink to={"/"} className={({isActive}) => isActive ? "text-white bg-green-900" :""}><IoHome />Home</NavLink> </li>
    <li> <NavLink to={"/timeline"} className={({isActive}) => isActive ? "text-white bg-green-900" :""}><IoTimeSharp />Timeline</NavLink> </li>
    <li> <NavLink to={"/stats"} className={({isActive}) => isActive ? "text-white bg-green-900" :""}><ImStatsDots />Stats</NavLink> </li>
    </>
    return (
        <div className='navbar  bg-base-100 shadow-sm'>
            <div className=" container mx-auto flex justify-between flex flex-col sm:flex-row">
                <div className="">
                    <a className="btn btn-ghost text-xl text-green-900"><span className='font-bold text-black'>Keen</span>Keeper</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {Navber}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;