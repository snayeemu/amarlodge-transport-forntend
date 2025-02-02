import { MdOutlineDashboard, MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const ProfileNavbar = () => {
  return (
    <div className="hidden bg-[#0538e9] md:block relative z-[999] py-[2px]">
      <div className="mx-auto flex max-w-[1350px] justify-between py-0">
        <div className="flex">
          <Link
            href="/"
            className="flex items-center justify-center gap-x-2 border-none text-sm font-light text-white "
          >
            <IoCallOutline className="text-lg" />
            01766948957
          </Link>
          <div className="mx-2 my-auto h-[25px] w-[1px]  bg-white"></div>

          <Link
            href="/"
            className="flex items-center justify-center gap-x-2 border-none text-sm font-light text-white "
          >
            <MdOutlineEmail className="text-lg" />
            support@amarlodge.com
          </Link>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="form-control">
            <p className="text-sm text-white ">Shaikh Nayeem Uddin</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar rounded-full flex flex-col"
            >
              <div className="w-8 rounded-full">
                <Image
                  className=""
                  alt="profile picture"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100  shadow"
            >
              <li className="mb-2 ms-2 text-lg font-semibold">My Account</li>
              <hr />

              <li>
                <a className="gap-x-2">
                  <MdOutlineDashboard className="text-2xl" />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="gap-x-2">
                  <CgProfile className="text-2xl" />
                  Profile
                </a>
              </li>
              <li className="gap-x-2">
                <a>
                  <IoSettingsOutline className="text-2xl" />
                  Profile Settings
                </a>
              </li>
              <li>
                <a>
                  <MdLogout className="text-2xl" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
