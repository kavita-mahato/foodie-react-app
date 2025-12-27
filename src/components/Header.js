import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import {
    FaHome,
    FaShoppingCart,
    FaShoppingBasket,
    FaInfoCircle,
    FaEnvelope,
    FaSignOutAlt,
    FaBars,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState('Sign In');
    const [open, setOpen] = useState(false);

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <header className="bg-orange-200 sticky top-0 z-50 shadow-[0_8px_10px_-6px_rgba(0,0,0,0.25)]">
            <div className="max-w-9xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <img
                        className="w-14 h-12 rounded-full"
                        src={LOGO_URL}
                        alt="logo"
                    />
                    <h1 className="font-fantasy text-2xl font-bold">FOODIE</h1>
                </div>

                {/* mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-md"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <FaBars size={20} />
                </button>

                {/* Desktop / large screens nav */}
                <nav className="hidden md:block">
                    <ul className="flex list-none px-5 text-lg font-semibold text-[#444] font-poppins items-center">
                        <li className="p-2.5 m-2.5">
                            <Link to="/" className="flex items-center gap-2">
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li className="p-2.5 m-2.5">
                            <Link
                                to="/cart"
                                className="flex items-center gap-2"
                            >
                                <FaShoppingCart /> Cart({cartItems.length})
                            </Link>
                        </li>
                        <li className="p-2.5 m-2.5">
                            <Link
                                to="/grocery"
                                className="flex items-center gap-2"
                            >
                                <FaShoppingBasket /> Grocery
                            </Link>
                        </li>
                        <li className="p-2.5 m-2.5">
                            <Link
                                to="/about"
                                className="flex items-center gap-2"
                            >
                                <FaInfoCircle /> About&nbsp;Us
                            </Link>
                        </li>
                        <li className="p-2.5 m-2.5">
                            <Link
                                to="/contact"
                                className="flex items-center gap-2"
                            >
                                <FaEnvelope /> Contact&nbsp;Us
                            </Link>
                        </li>
                        <li className="p-2.5 m-2.5">
                            <Link
                                to="/signin"
                                className="flex items-center gap-2"
                            >
                                <FaSignOutAlt /> {btnName}
                            </Link>
                        </li>
                        <li className="py-2.5 px-2 my-2.5 mx-2 font-semibold">
                            {loggedInUser}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile slide-down menu */}
            {open && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col gap-2 bg-orange-100 rounded-lg p-3">
                        <li>
                            <Link
                                to="/"
                                className="flex items-center gap-2 p-2 rounded hover:bg-orange-200"
                            >
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className="flex items-center gap-2 p-2 rounded hover:bg-orange-200"
                            >
                                <FaShoppingCart /> Cart({cartItems.length})
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/grocery"
                                className="flex items-center gap-2 p-2 rounded hover:bg-orange-200"
                            >
                                <FaShoppingBasket /> Grocery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="flex items-center gap-2 p-2 rounded hover:bg-orange-200"
                            >
                                <FaInfoCircle /> About&nbsp;Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 p-2 rounded hover:bg-orange-200"
                            >
                                <FaEnvelope /> Contact&nbsp;Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/signin"
                                className="flex items-center gap-2 p-2 rounded hover:bg-orange-200"
                            >
                                <FaSignOutAlt /> {btnName}
                            </Link>
                        </li>
                        <li className="py-2 px-2 font-semibold">
                            {loggedInUser}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
