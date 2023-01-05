import { MdKeyboardArrowRight } from 'react-icons/md'
const Mission = () => {
    return (
        <div className='lg:flex-1'>
            <h1 className="text-xl text-gray-600 dark:text-gray-300 mt-6">
                Our Mission
            </h1>
            <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>
            <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start mb-8 text-gray-600">
                    Our goal is to have satisfied customers who will come back to us again and who will recommend us to others and thus 
                    help our small team expand. That’s why we strive to do our job as best we can.
                </p>
            </div>
            <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start ">
                    <MdKeyboardArrowRight className="text-primary text-xl" />
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Polite and professional drivers
                    </span>
                </p>

                <p className="flex items-start ">
                    <MdKeyboardArrowRight className="text-primary text-xl" />
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Clean and comfortable cars with WIFI</span>
                </p>

                <p className="flex items-start ">
                    <MdKeyboardArrowRight className="text-primary text-xl" />
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Luxury black limo at your disposal</span>
                </p>

                <p className="flex items-start ">
                    <MdKeyboardArrowRight className="text-primary text-xl" />
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Private transfers without sharing</span>
                </p>

                <p className="flex items-start ">
                    <MdKeyboardArrowRight className="text-primary text-xl" />
                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Satisfy our customer</span>
                </p>
            </div>
        </div>
    )
}

export default Mission