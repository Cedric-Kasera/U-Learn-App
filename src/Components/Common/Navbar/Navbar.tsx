import { IoChevronDown } from "react-icons/io5";

function Navbar() {

  return (
    
      <header className="bg-[#ECF6FFff] shadow-lg sticky top-0 font-mono font-bold">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="object-fill" href="#">
                <span className="sr-only">Home</span>
                <img src="./U-Learn-Logo.png" alt="" className="hidden md:flex"/>
                <img src="./Navbar-Icon.png" alt="" className="md:hidden" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-base">
                  <li className="">
                    <a
                      className="text-[#3F4571ff] transition hover:text-[#929AB4ff] flex flex-row items-center gap-1 justify-center"
                      href="#"
                    >
                      {" "}
                      Explore
                      {" "}
                      <IoChevronDown />
                    </a>
                    
                  </li>
                  
                  <li>
                    <a
                      className="text-[#3F4571ff] transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#3F4571ff] transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                  
                  
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-end gap-2 font-bold">
              <div className="sm:flex sm:gap-2">
                <button className="rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-teal-600">
                  Sign Up
                </button>

                <div className="hidden sm:flex">
                  <button className="rounded-md bg-[#3F4571ff] px-10 py-2.5 text-sm font-medium text-white shadow">
                    Login
                  </button>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-transparent py-2 text-[#3F4571ff] transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    
  );
}

export default Navbar;
