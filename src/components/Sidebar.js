import React, { useRef } from 'react';
import { BiStation, BiBriefcase, BiBong, BiVideoRecording, BiFirstAid, BiTennisBall, BiDevices, BiMenuAltLeft } from "react-icons/bi";

function Sidebar(props) {
    const handleMenu = () => {
        document.getElementById('Main').classList.toggle("-translate-x-full");
    }
    return (
        <>
            <button onClick={handleMenu} className="absolute right-2 top-4 text-black p-3"><BiMenuAltLeft size={24} /></button>
            <aside className="fixed left-0 z-40 transform -translate-x-full xl:translate-x-0 ease-in-out transition duration-500" id="sidebar">
                <div id="Main" className="xl:rounded-r min-h-[100vh] transform  xl:translate-x-0 flex justify-start items-start h-full sm:w-64 bg-gray-900 flex-col">

                    <div className="rounded-r bg-gray-900 xl:hidden flex w-full px-6 py-3 items-center ">
                        <div className="flex w-full items-end">
                            <img className="w-12" src={props.logo} alt="neo news" />
                            <p className="text-xl leading-6 text-white">Neo News</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 cursor-pointer">
                        <a className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded">
                            <svg className="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-base leading-4">Home</p>
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
                        <p className="text-sm leading-5  uppercase text-left  text-white flex justify-between items-center w-full py-5 space-x-14">Categories</p>
                        <div id="menu1" className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiStation size={20} />
                                <p className="text-base leading-4">General</p>
                            </a>
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiBriefcase size={20} />
                                <p className="text-base leading-4">Business</p>
                            </a>
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52 cursor-pointer">
                                <BiBong size={20} />
                                <p className="text-base leading-4">Science</p>
                            </a>
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiVideoRecording size={20} />
                                <p className="text-base leading-4">Entertainment</p>
                            </a>
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiFirstAid size={20} />
                                <p className="text-base leading-4">Health</p>
                            </a>
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiTennisBall size={20} />
                                <p className="text-base leading-4">Sports</p>
                            </a>
                            <a className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">
                                <BiDevices size={20} />
                                <p className="text-base leading-4  ">Technology</p>
                            </a>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar