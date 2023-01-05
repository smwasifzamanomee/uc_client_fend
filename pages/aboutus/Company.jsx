
const Company = () => {
    return (
        <div className='lg:flex-1'>
            <h1 className="text-xl text-gray-600 dark:text-gray-300 mt-14">
                Our Company
            </h1>
            <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>
            <div className="mt-6 space-y-8 md:mt-4">
                <p className="flex items-start mb-8 text-gray-600">
                    A chauffeur is a professional hired to safely and punctually deliver clients from one 
                    location to another. They offer courteous customer service and have a helpful, calm demeanor 
                    when interacting with passengers. They handle travel logistics and may suggest local 
                    activities for the client.<br /> <br />
                    A driver is essentially anyone operating a vehicle who takes you from one location to 
                    another. A chauffeur also referred to as a professional driver, is trained to provide 
                    you with a safe, comfortable drive with a touch of elegance and luxury.
                </p>
            </div>
        </div>
    )
}

export default Company