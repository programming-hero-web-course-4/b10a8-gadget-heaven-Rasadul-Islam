import { useState, useEffect } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { getStoredCardList, getStoredWishList } from "../../Utility/AddToDb";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [wishCount, setWishCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const updateCounts = () => {
            setCartCount(getStoredCardList().length);
            setWishCount(getStoredWishList().length);
        };

        // Initial load
        updateCounts();

        // Listen to storage changes
        window.addEventListener("storage", updateCounts);

        return () => {
            window.removeEventListener("storage", updateCounts);
        };
    }, []);

    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/statistics", name: "Statistics", id: 2 },
        { path: "/dashboard", name: "Dashboard", id: 3 },
        { path: "/contact", name: "Contact Us", id: 4 },
    ];

    const headerBackground =
        location.pathname === "/"
            ? "bg-purple-500 mx-1 mt-1 border-x-2 border-t-2 rounded-xl rounded-b-none border-gray-300"
            : "bg-white";

    return (
        <div>
            <header className={`${headerBackground}`}>
                <nav className="container mx-auto flex items-center justify-between font-bold p-2">
                    {/* Logo */}
                    <Link to="/" className="lg:text-xl text-base">
                        Gadget Heaven
                    </Link>

                    {/* Navigation links */}
                    <ul
                        className={`flex flex-col z-30 md:flex md:flex-row md:items-center md:justify-center lg:text-base text-sm absolute right-5 top-8 text-right px-5 md:py-2 md:relative md:top-0 bg-gray-300 md:bg-transparent rounded-lg gap-x-10 gap-y-2 py-5 mt-2 ${
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

                    {/* Icons */}
                    <div className="flex gap-5 items-center">
                        {/* Cart icon */}
                        <div className="relative">
                            <IoCartOutline className="bg-white text-black text-3xl rounded-full p-1" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        </div>

                        {/* Wish list icon */}
                        <div className="relative">
                            <GrFavorite className="bg-white text-black text-3xl rounded-full p-1" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {wishCount}
                            </span>
                        </div>

                        {/* Mobile menu toggle */}
                        <div className="md:hidden" onClick={() => setOpen(!open)}>
                            {open ? (
                                <IoClose className="bg-white text-black text-3xl rounded-full p-1" />
                            ) : (
                                <IoMenu className="bg-white text-black text-3xl rounded-full p-1" />
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
