import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="bg-black text-white px-8 py-4 shadow-lg fixed w-full top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <FaDumbbell className="text-red-500 text-2xl" />

          <h1 className="text-2xl font-bold tracking-wide">
            GYM<span className="text-red-500">STORE</span>
          </h1>

        </div>

        {/* Navigation Links */}

        <ul className="hidden md:flex gap-8 text-lg font-medium">

          <Link to='/'>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Home
            </li>
          </Link>

          <Link to='/products'>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Products
            </li>
          </Link>

          <Link to='/about'>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              About
            </li>
          </Link>

          <Link to='/contact'>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Contact
            </li>
          </Link>

        </ul>

        {/* Button */}

        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition duration-300">
          Shop Now
        </button>

      </div>

    </nav>
  );
}