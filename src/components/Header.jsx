import { RiArrowDownSLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import { RiBookOpenLine } from "@remixicon/react";
import { navItems } from "../constant/data";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { useState } from "react";
<RiMenuLine size={24} />;
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 py-4 border-b border-neutral-200 z-50">
      <section className="px-4 sm:px-8">
        <div className="flex justify-between items-center gap-5">
          {/* logo  */}
          <div className="flex items-center gap-1">
            <span className="bg-lime-600 text-white size-8 flex items-center justify-center rounded-lg">
              <RiBookOpenLine size={20} />
            </span>

            <span className="font-sans text-xl font-bold">Brischo</span>
          </div>
          {/* mobile menu  */}
          <nav className="lg:hidden relative">
            <button
              onClick={() => setOpen(!open)}
              className="p-3 shadow-util rounded-full focus:bg-neutral-100 hover:bg-neutral-100 transition-colors"
            >
              {open ? <RiCloseLine /> : <RiMenuLine />}
            </button>

            <ul
              className={`absolute ${
                !open && "hidden"
              } top-full right-0 shadow-util bg-white rounded-lg mt-3 min-w-[200px] w-full`}
            >
              {navItems.map(({ id, href, label, hasDropdown, dropdown }) => (
                <li key={id} className="relative group">
                  {/* main link */}
                  <a
                    href={href}
                    className="flex items-center justify-between 
                  px-4 py-1.5 text-gray-600 hover:text-lime-600
                  hover:bg-lime-50 transition duration-100 rounded-lg"
                  >
                    {label}
                    {hasDropdown && (
                      <RiArrowDownSLine className="group-hover:rotate-180 group-focus:rotate-180 transition-transform" />
                    )}
                  </a>

                  {/* dropdown */}
                  {hasDropdown && (
                    <ul
                      className="absolute z-10 left-0 top-full hidden
                   group-hover:block bg-white shadow-util border border-neutral-200
                   rounded-lg p-1 min-w-[200px]"
                    >
                      {dropdown.map((el) => (
                        <li key={el}>
                          <a
                            href="#"
                            className="block px-3 py-2 transition-colors
                           duration-100
                            hover:bg-lime-50
                             hover:text-lime-600 rounded"
                          >
                            {el}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* desktop nav  */}
          <nav className="hidden lg:flex items-center gap-7">
            <div className="hidden xl:block">
              <SearchBar />
            </div>
            <ul className="flex gap-8">
              {navItems.map(({ id, href, label, hasDropdown, dropdown }) => (
                <li key={id} className="relative group">
                  {/* main link */}
                  <a
                    href={href}
                    className="flex items-center justify-between 
                  px-4 py-1.5 text-gray-600 hover:text-lime-600
                  hover:bg-lime-50 transition duration-100 rounded-lg"
                  >
                    {label}
                    {hasDropdown && (
                      <RiArrowDownSLine className="group-hover:rotate-180 group-focus:rotate-180 transition-transform" />
                    )}
                  </a>

                  {/* dropdown */}
                  {hasDropdown && (
                    <ul
                      className="absolute z-10 left-0 top-full hidden
                   group-hover:block bg-white shadow-util border border-neutral-200
                   rounded-lg p-1 min-w-[200px]"
                    >
                      {dropdown.map((el) => (
                        <li key={el}>
                          <a
                            href="#"
                            className="block px-3 py-2 transition-colors
                           duration-100
                            hover:bg-lime-50
                             hover:text-lime-600 rounded"
                          >
                            {el}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Button label="Sign up" />
          </div>
        </div>
        <div className="mt-4 xl:hidden">
          <SearchBar />
        </div>
      </section>
    </header>
  );
}

export default Header;
