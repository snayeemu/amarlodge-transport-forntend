import { MdOutlineDashboard, MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Image from "next/image";

const ProfileNavbar = () => {
  return (
    <div className="bg-[#0538e9] hidden md:block ">
      <div className="navbar  max-w-[1350px] mx-auto py-0">
        <div className="flex-1">
          <a className="text-sm text-white font-light btn bg-[#0538e9] hover:bg-[#0538e9] border-none">
            <IoCallOutline className="text-lg" />
            01766948957
          </a>
          <div className="h-[35px]  bg-white   w-[1px]"></div>

          <a className="text-sm text-white font-light btn bg-[#0538e9] hover:bg-[#0538e9] border-none">
            <MdOutlineEmail className="text-lg" />
            support@amarlodge.com
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <p className="text-white text-sm ">Shaikh Nayeem Uddin</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  className=""
                  alt="profile picture"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow"
            >
              <li className="font-semibold mb-2 text-lg ms-2">My Account</li>
              <hr />

              <li>
                <a className="gap-2">
                  <MdOutlineDashboard className="text-2xl" />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="gap-2">
                  <CgProfile className="text-2xl" />
                  Profile
                </a>
              </li>
              <li className="gap-2">
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
