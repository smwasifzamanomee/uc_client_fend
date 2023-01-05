import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { navigation } from "../../../../data/data";
import Button from "../../../UI/Button";

const HorizontalNavigation = () => {

  return (
    <header className="w-full sticky bg-light top-0 shadow z-50">
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 border-t py-6"
        aria-label="Top"
      >
        <div className="flex justify-between items-center ">

          {/* Desktop */}
          <div className="flex justify-center items-center gap-8 py-6 ">
            {navigation.map((navList) => (
              <Link
                key={navList.id}
                className={'hover:text-primary transition-colors duration-200'}
                href={navList.route}
              >
                {navList.name}

              </Link>

            ))}
            {/* start */}
          </div>

          {/* Logo and Menu Icon */}
          <div className="flex justify-center items-center gap-x-4 py-4">
            <h3 className="font-normal text-text_muted flex items-center gap-x-4">
              <FaCar className="bg-primary text-light w-12 h-12 p-2 rounded-full" />
              <span>United Chauffeur</span>
            </h3>
          </div>

          <div className="flex gap-4 ">
            <Link href="/login">
              <Button width={"w-[150px]"} className={"text-light "}>
                login
              </Button>

            </Link>

            <Link href="/register">
              <Button width={"w-[150px]"} bgColor={"bg-transparent hover:bg-primary"} className={"border border-primary text-primary hover:text-light"}>
                Register
              </Button>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default HorizontalNavigation;