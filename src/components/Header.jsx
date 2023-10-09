import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice.js";
import { logoutUser } from "../features/user/userSlice.js";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
    navigate("/");
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user?.username}</p>
            <button
              type="button"
              className="btn btn-primary btn-outline btn-xs"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-6">
            <Link to="/login" className="link-hover link text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link-hover link text-xs sm:text-sm">
              Create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
