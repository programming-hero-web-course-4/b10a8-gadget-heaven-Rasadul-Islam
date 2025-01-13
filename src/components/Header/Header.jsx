import { useState } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const routes = [
        { "path": "/", "name": "Home", "id": 1 },
        { "path": "/statistics", "name": "Statistics", "id": 2 },
        { "path": "/dashboard", "name": "Dashboard", "id": 3 }
    ];

    return (
        <div>
            <header className="text-purple-500">
                <nav className="container mx-auto flex items-center justify-between font-bold px-2">
                    <Link to='/' className="lg:text-xl text-base">Gadget Heaven</Link>
                    <ul
                        className={`flex flex-col md:flex md:flex-row  md:items-center md:justify-center lg:text-base text-sm absolute right-5 top-8 text-right px-5 md:py-2 md:relative md:top-0 bg-gray-300 md:bg-transparent rounded-lg gap-x-10 gap-y-2 py-5   mt-2 ${
                            open ? "" : "hidden"
                        }`}
                    >
                        {routes.map((route) => (
                            <li key={route.id}>
                                <Link
                                    to={route.path}
                                    className={`${
                                        location.pathname === route.path
                                            ? "bg-purple-100 border-2 border-purple-400 p-1 rounded-lg"
                                            : ""
                                    }`}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-5">
                        <IoCartOutline className="bg-white text-black text-3xl rounded-full p-1"></IoCartOutline>
                        <GrFavorite className="bg-white text-black text-3xl rounded-full p-1"></GrFavorite>
                        <div className="md:hidden" onClick={() => setOpen(!open)}>
                            {open === true ? (
                                <IoClose className="bg-white text-black text-3xl rounded-full p-1"></IoClose>
                            ) : (
                                <IoMenu className="bg-white text-black text-3xl rounded-full p-1"></IoMenu>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
