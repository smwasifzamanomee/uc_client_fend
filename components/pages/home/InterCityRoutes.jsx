import { TopCitiesData, TopRoutesData } from '../../../data/data'
import { BsArrowRightShort } from 'react-icons/bs'
import Image from 'next/image'
import Button from '../../UI/Button.jsx'

const InterCityRoutes = () => {
  return (
    <section className=' bg-light_gray'>
      <figure className='sm:max-w-6xl md:max-w-7xl mx-auto py-12 px-4'>
        
      {/* InterCity title */}
      <div className='text-center'>
      <h1 className='text-4xl py-4  text-[#181A1F] font-semibold'>Intercity Rotues</h1>
        <span className="inline-block w-[50px] h-[3px] bg-primary my-4"></span>
      </div>
        
      {/* Top cities section */}
      <div className='py-10'>
          <p className='text-2xl mb-2 text-[#2A2C31] font-semibold'>Top cities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              TopCitiesData.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col  rounded-lg shadow hover:translate-y-5 transition-all duration-500">
                    <div className="flex-shrink-0">
                      <img className='w-full h-[180px] object-cover' src={item.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                      <div className="flex-1">
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-neutral-600">{item.title}</p>
                          <p className="mt-3 text-base text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>

        {/* Top routes section */}
        <div className='py-10'>
            <p className='text-2xl mb-2 text-[#2A2C31] font-semibold'>Top routes</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {
                TopRoutesData.map((item) => {
                  return (
                    <div key={item.id} className="flex flex-col overflow-hidden rounded-lg shadow hover:translate-y-2 transition-all duration-500">
                      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                        <div className="flex-1">
                          <div className="block mt-2">
                            <p className="font-semibold text-neutral-600 flex">{item.to} <span className='text-2xl'><BsArrowRightShort /></span>{item.from}</p>
                            <p className="mt-3 text-base text-gray-500">{item.destination}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            {/* Book ride button */}
            <div className='sm:flex justify-between items-center sm:h-[100px] border rounded p-4 mt-8 bg-light'>
                <p className='text-neutral-600 sm:mb-0 mb-4'>Don't see the route you are looking for? <br /> Enter your ideal destinations to see the price.</p>
              <Button width={"w-[200px]"} bgColor='bg-gradient-to-tr from-primary to-orange-500'>Book an intercity ride</Button>
            </div>
        </div>

      </figure>
    </section>

  )
}

export default InterCityRoutes