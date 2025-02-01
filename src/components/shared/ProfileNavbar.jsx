import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const ProfileNavbar = () => {
  return (
    <div className="bg-[#0538e9] hidden md:block">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="flex-1">
          <a className="text-sm text-white">
            01766948957 | support@amarlodge.com
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <p className="text-white text-sm">Shaikh Nayeem Uddin</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow"
            >
              <h1 className="font-semibold mb-2">My Account</h1>
              <hr />

              <li>
                <a className="gap-2">
                  <MdOutlineDashboard />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="gap-2">
                  <CgProfile />
                  Profile
                </a>
              </li>
              <li className="gap-2">
                <a>
                  <IoSettingsOutline />
                  Profile Settings
                </a>
              </li>
              <li>
                <a>
                  <MdLogout /> Logout
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
