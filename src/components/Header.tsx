import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rapidRoboticsLogo from "../assets/rapidRoboticsLogo.png";
import { HeaderContext } from "../lib";

export const Header = () => {
  const headerContext: any = useContext(HeaderContext);

  return (
    <div>
      <div className="relative pt-6">
        <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" aria-label="Home" tabIndex={1}>
                <img
                  src={rapidRoboticsLogo}
                  style={{ width: 150, height: 50 }}
                />
              </Link>
            </div>
            <div className="hidden md:block md:ml-10">
              <Link
                to="/"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                tabIndex={2}
                data-function="control-link"
              >
                Control
              </Link>
              <Link
                to="/stats"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                onClick={headerContext.handlePageChange}
                tabIndex={3}
                data-function="stats-link"
              >
                Stats
              </Link>
            </div>
          </div>
        </nav>
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div
              className="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 pt-2 pb-3">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Control
                </Link>
                <Link
                  to="/stats"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Stats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
