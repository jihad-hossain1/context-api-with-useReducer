import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-dark  text-gray-light w-full">
      <div className="bg-zinc-900 py-4 sticky z-10 top-0">
        <div className="max-w-screen-xl m-auto">
          <ul className="flex justify-center gap-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
