import { useState } from "react";
import { IoCartOutline , IoMenu, IoClose } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";



const Header = () => {
    const [open, setOpen] = useState(false);
    const routes =[
        {"path": "/", "name": "Home", "id": 1},
        {"path": "/statistics", "name": "Statistics", "id": 2},
        {"path": "/dashboard", "name": "Dashboard", "id": 3}
      ]
      
    return (
        <div className="rounded-xl p-2 border-2 border-gray-300">
            <header className="bg-purple-500 py-5 rounded-xl">
                <nav className="container mx-auto flex items-center justify-between text-white font-bold px-2">
                    <h1 className="lg:text-xl text-base">Gadget Heaven</h1>
                    <ul className={`md:flex md:items-center md:justify-center lg:text-base text-sm absolute right-5 top-16 text-right px-5 py-2 md:relative md:top-0 bg-white md:bg-transparent rounded-lg text-black md:text-white gap-x-10 mt-2 ${open?'':'hidden'}`}>
                    {
                        routes.map(route => <li key={route.id}><Link to={route.path}>{route.name}</Link></li>)
                    }
                    </ul>
                    <div className="flex gap-5">
                    <IoCartOutline className="bg-white text-black text-3xl rounded-full p-1"></IoCartOutline> 
                    <GrFavorite className="bg-white text-black text-3xl rounded-full p-1"></GrFavorite>
                    <div className="md:hidden" onClick={()=> setOpen(!open)}>
                        {
                            open === true ? <IoClose className="bg-white text-black text-3xl rounded-full p-1"></IoClose> : <IoMenu className="bg-white text-black text-3xl rounded-full p-1"></IoMenu>
                        }
                    
                    </div> 
                    </div> 
                </nav>
            </header>
        </div>
    );
};

export default Header;