import Container from "../../../utils/container";
import Image from "next/image";
import TripForm from "../booking/TripForm";

const Hero = () => {
  return (
    <Container height={"min-h-[90vh]"} width={"w-full"} bgColor="bg-black">
      {/* Hero section Backgroud image */}
      <div className="w-full h-[60vh] relative">
        <Image
          priority
          src="/images/Hero/Hero1.jpg"
          fill
          alt="heroimg"
          className=" object-cover"
        />
      </div>
      <div className=" container mx-auto md:flex text-light sm:py-0 py-12">
        <div className="flex-1 ">
          <h1 className="font-bold text-3xl pt-6">
            Chauffeur at your fingertips
          </h1>
          <p className="py-4">
            Download the Blacklane app toeasily book safe.{" "}
            <br className="lg:hidden" />
            private rides while you're on the go.
          </p>
          {/* Apps Image */}
          <div className="flex  items-center gap-x-3 sm:w-[400px] h-[100px]">
            <div className="w-[120px] h-[100px] relative">
              <Image
                src="/images/Hero/appstore.png"
                fill
                alt="appstore logo"
                className="object-center object-contain"
              />
            </div>
            <div className="w-[120px] h-[100px] relative">
              <Image
                src="/images/Hero/googleplay.png"
                fill
                className=" object-center object-contain"
                alt="googleplay logo"
              />
            </div>
          </div>
        </div>

        {/* Input Form */}

        <div className="z-20 md:-mt-80 mt-8 mb-10">
          <TripForm />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
