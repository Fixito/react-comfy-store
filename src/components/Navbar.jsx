import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../features/user/userSlice.js";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const theme = useSelector((state) => state.userState.theme);
  const isDarkTheme = theme === "dracula";

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          {/* title */}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl lg:flex"
          >
            C
          </NavLink>
          {/* dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-200 p-2 shadow"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme setup */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            />
            {/* sun icon*/}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon*/}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* cart link */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge indicator-item badge-primary badge-sm">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
