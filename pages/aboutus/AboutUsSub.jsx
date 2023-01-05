

import AboutusButton from "../../components/UI/AboutusButton"
import UcHeader from "../../components/UI/UcHeader"
import Mission from "./Mission"
import Work from "./Work"
import Company from "./Company"

const AboutUsSub = () => {
  return (
    <>
      <UcHeader
        title={'About Us'}
        path='Home / About Us'
      />
        <div className="container mx-auto lg:flex justify-center mb-20 lg:px-40">
          <Mission />
          <Work />
        </div>
        <div>
          <AboutusButton />
          
        </div>
        <div className="container mx-auto lg:flex justify-center mb-20 lg:px-40 gap-20">
          <div className='lg:flex-1'>
            <h1 className="text-xl text-gray-600 dark:text-gray-300 mt-14">
              Our Team
            </h1>
            <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>
            <div className="pt-6">
            <p className="flex items-start mb-8 text-gray-600">
            We are a small team of selected  Belgrade Taxi drivers and limo service partners. For joining our team, licensed taxi drivers and professional limo chauffeurs have to speak English well, to follow our high demands about business behaving, and they have to own at least middle-class sedan not older than 6 years. And drivers who drive on sightseeing tours have to know a particular part of Serbia really good. <br/> <br/>
            We are there for you if you need a private transfer or you wish to hire a chauffeur-driven car for business trips or sightseeing tours anywhere in uk.
                </p>
            </div>
          </div>
          <div className="lg:flex-1">
            <Company />
          </div>
        </div>

      </>
      )
}

export default AboutUsSub