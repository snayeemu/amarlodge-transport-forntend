import Image from "next/image";
import Link from "next/link";
import DropdownItems from "./dropdownItems/DropdownItems";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-80">
      <div className="navbar  mx-auto max-w-[1350] justify-between lg:flex ">
        <div className="navbar-start flex w-full justify-between lg:w-auto">
          <Link className="text-xl" href="/">
            <Image
              src="https://amarlodge.com/app-logo.svg"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <DropdownItems />
            </div>
          </div>
        </div>

        <div className="navbar-end hidden items-center lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            <div className="my-auto">
              <Link
                href="/"
                className="me-2 text-lg transition-all duration-1000 hover:border  hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-b-blue-700 hover:text-blue-700 ease-in-out pb-1"
              >
                Home
              </Link>
            </div>
            <div className="my-auto">
              <Link
                href="#"
                className="me-2 text-lg transition-all duration-1000 hover:border  hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-b-blue-700 hover:text-blue-700 ease-in-out pb-1"
              >
                Cars
              </Link>
            </div>
            <div className="my-auto">
              <Link
                href="#"
                className="me-2 text-lg transition-all duration-1000 hover:border  hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-b-blue-700 hover:text-blue-700 ease-in-out pb-1"
              >
                Blog
              </Link>
            </div>
            <li>
              <button className="btn bg-blue-700 text-white transition-all duration-1000 hover:bg-slate-800 ease-in-out">
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
