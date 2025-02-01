import Image from "next/image";
import Link from "next/link";
import DropdownItems from "./dropdownItems/DropdownItems";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 max-w-[1350] mx-auto lg:flex justify-between">
        <div className="navbar-start flex justify-between w-full lg:w-auto">
          <Link className="btn btn-ghost text-xl" href="/">
            <Image
              src="https://amarlodge.com/app-logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <DropdownItems />
            </div>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 ">
            <li className="my-auto">
              <Link
                href="#"
                className="me-2 text-xl hover:border hover:border-x-0 hover:border-t-0  hover:border-b-blue-700 hover:text-blue-700 transition-all duration-1000"
              >
                TRANSPORTS
              </Link>
            </li>
            <li>
              <button className="btn btn-primary text-white">
                Register Your Transport
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
