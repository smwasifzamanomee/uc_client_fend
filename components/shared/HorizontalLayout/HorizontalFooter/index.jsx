import Image from "next/image";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import Container from "../../../../utils/container";
import Button from "../../../UI/Button";

export default function HorizontalFooter() {
  const heading = ({ name }) => {
    return (
      <div className="flex-1 mb-4">
        <h3 className="font-bold text-xl mb-2 text-light">{name}</h3>
        <p className="w-[80px] h-[3px] bg-primary"></p>
      </div>
    );
  };
  return (
    <>
      <Container bgColor={'bg-light'}>
        <div className="sm:flex justify-between items-center h-[400px]">
          <aside className="flex-1 ">
            <h2 className="font-bold text-3xl mb-4">Download the app</h2>
            <p className="">Easily book, change, or cancel rides on the go. Think of it as peace <br className="sm:block hidden" /> of mind in the palm of your hand.</p>

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

        </aside>
        <aside className="flex-1">
          <div className=" w-[400px] h-[500px] relative">
           <Image 
            src='/images/Hero/phone.png'
            className=" object-contain -mb-5"
            fill
            alt='phone.png'
           />
          </div>
        </aside>
      </div>
    </Container>
      <Container bgColor={"bg-black "}>
        <footer className="h-[400px]">
          {/* Footer Heading */}
          <div className="flex items-center justify-between gap-8">
            <>{heading({ name: "About Us" })}</>

            <>{heading({ name: "NewsLetter" })}</>

            <>{heading({ name: "Contact Details" })}</>
          </div>
          <div className="flex items-center justify-between gap-8 text-light">
            {/* About us  */}
            <div className="flex-1">
              <p className="my-4">
                A chauffeur is someone employed to look after the needs of
                the passenger as well as the operation of the motor vehicle.
                A chauffeur is an experienced, licensed professional. A chauffeur
                will serve your every need; from security, to booking reservations, sourcing restaurants, school runs and errands.


              </p>
              <p className="my-4">
                Also known as personal drivers, chauffeurs collect and transport clients between 
                locations. Chauffeurs generally offer their services to high-income individuals or companies.
              </p>
            </div>

            {/* Subscription */}
            <div className="flex-1">
              <p>
                Subscribe to our newsletter for news, <br />
                updates, exclusive discounts and offers.
              </p>
              <input
                type="text"
                className="block outline-none border-none my-4 text-gray-500"
              />
              <Button width={"w-[200px]"}>Subscribe</Button>
            </div>

            {/* Contact Address */}
            <div className="flex-1">

              {/* City */}
              <div className="flex items-center gap-x-6 my-3">
                <span>
                  <FaLocationArrow className="text-2xl" />{" "}
                </span>
                <p className="font-bold">
                  700 5th Avenue, New york city, <br /> United States
                </p>
              </div>

              {/* Street  */}
              <div className="flex items-center gap-x-6 my-3">
                <span>
                  <FaPhone className="text-2xl" />
                </span>
                <p>
                  1800-1111-2222 <br />
                  <span className="text-gray-500">
                    Mon-Fri, 9.00am until 6.30pm
                  </span>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-x-6 my-3">
                <span>
                  <FaMailBulk className="text-2xl" />
                </span>
                <p>
                  booking@example.com <br />
                  <span className="text-gray-500">We reply within 24hrs</span>
                </p>
              </div>

            </div>
          </div>
        </footer>
      </Container>
      <p className="bg-black text-center py-8 border-t border-gray-600 text-light">&copy; 2022 Chauffeur, All Rights Reserved</p>
    </>
  );
}