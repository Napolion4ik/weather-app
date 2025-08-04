import { Search } from "lucide-react";
import Image from "next/image";
import LinkHook from "../feathers/feathers";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full md:max-w-5xl  mx-auto my-4 flex justify-between px-3">
        <div>
          <Image src="/iconSite.png" alt="iconSite" width={40} height={40} />
        </div>
        <nav>
          <ul className="flex gap-3 font-bold text-lg sm:text-xl ">
            <li className="relative">
              <LinkHook
                classes="p-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                href="/"
              >
                Home
              </LinkHook>
            </li>
            <li className="relative">
              <LinkHook
                classes="p-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                href="/user"
              >
                User
              </LinkHook>
            </li>
            <li className="relative">
              <LinkHook
                classes="p-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                href="/weather"
              >
                Weather
              </LinkHook>
            </li>
            <li className="relative">
              <LinkHook
                classes="p-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                href="/saveuser"
              >
                Save User
              </LinkHook>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block border-gray-100 border-2 rounded-3xl p-1 focus-within:border-gray-300 focus-within:shadow-md transition-all ">
          <div className="flex items-center">
            <Search />
            <input type="text" className="p-1 focus:outline-0" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
