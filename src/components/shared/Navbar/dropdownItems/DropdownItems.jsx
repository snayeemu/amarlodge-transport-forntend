"use client";

import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";

const DropdownItems = () => {
  return (
    <>
      <button
        className="btn lg:hidden"
        onClick={() =>
          document.getElementById("dropdown-nav-modal").showModal()
        }
      >
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
      </button>
      <dialog id="dropdown-nav-modal" className="modal border">
        <div className="modal-box absolute top-4 bg-black bg-opacity-80 text-white">
          <form method="dialog">
            {/* this is X button to close modal*/}
            <button className="btn btn-sm btn-circle btn-ghost absolute  right-2 top-2">
              ✕
            </button>
          </form>
          {/* contents */}
          <ul>
            <li>
              <Link href="/profile">
                <div className="flex gap-2 items-center">
                  <MdOutlineDashboard className="text-6xl" />
                  <p>
                    <span className="text-lg font-bold">
                      Shaikh Nayeem Uddin
                    </span>{" "}
                    <br />{" "}
                    <span className="font-light text-sm">
                      snayeemu2@gmail.com
                    </span>
                  </p>
                </div>
                <hr />
              </Link>
            </li>
            <div className="flex flex-col items-center justify-center gap-3 mt-5"> 
              <li className="my-auto">
                <Link
                  href="#"
                  className="me-2 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-blue-700 hover:text-blue-700 transition-all duration-1000"
                >
                  TRANSPORTS
                </Link>
              </li>
              <li>
                <button className="btn btn-primary text-white">
                  Register Your Transport
                </button>
              </li>
            </div>
          </ul>
        </div>
        {/* this button to close modal if -> clicked outside */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DropdownItems;
