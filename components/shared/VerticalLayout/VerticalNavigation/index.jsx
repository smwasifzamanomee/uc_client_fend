import Link from 'next/link';
import React, { useState } from 'react'
import { FaBars, FaCar } from 'react-icons/fa';
import { navigation } from '../../../../data/data';
import Button from '../../../UI/Button';

const VerticalNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=''>
      <nav className='container mx-auto px-4'>
        {/* Logo and Menu Icon */}
        <div className="flex justify-between items-center gap-x-4 py-4 border-b">
          <h3 className="font-normal text-text_muted flex items-center gap-x-4">
            <FaCar className="bg-primary text-light w-12 h-12 p-2 rounded-full" />
            <span>United Chauffeur</span>
          </h3>

          <FaBars
            onClick={() => setOpen((prev) => !prev)}
            className="bg-primary text-light w-10 h-10 p-2 cursor-pointer"
          />
        </div>

        {/* Mobile */}
        <div
          className={`${!open && " -translate-x-[99999px] animate-pulse"
            } absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-light to-slate-200 sm:hidden`}
        >
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="sm:hidden absolute top-5 right-4 cursor-pointer w-10 text-light h-10 bg-red-500 flex items-center justify-center text-2xl"
          >
            x
          </div>
          <div className="mt-24 flex flex-col justify-center items-center gap-y-4">
            {navigation.map((navList) => (
              <Link
                key={navList.id}
                className={''}
                onClick={() => setOpen(prev => !prev)}
                href={navList.route}
              >
                {navList.name}
              </Link>
            ))}
          </div>
          {/* start */}
          <div className="text-center">
            <Link href="/login">
              <Button className={"text-light my-4"}>
                login
              </Button>

            </Link>
           

            <Link href="/register">
              <Button bgColor={"bg-transparent hover:bg-primary"} className={"border border-primary text-primary hover:text-light"}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default VerticalNavigation