import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 max-w-[1350] mx-auto">
        <div className="navbar-start flex justify-between w-full">
          <Link className="btn btn-ghost text-xl" href="/">
            <Image
              src="https://amarlodge.com/app-logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 ">
            <li className="my-auto">
              <Link href="#" className="me-2 text-xl hover:border hover:border-b-blue-700 hover:text-blue-700 transition-all duration-1000">TRANSPORTS</Link>
            </li>
            <li>
            <button className="btn btn-primary text-white">Register Your Transport</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
