import Image from "next/image";
import { FaCalendar, FaStopwatch } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";
import { ourfleetdata } from "../../../data/data";
import Container from "../../../utils/container";
import UcHeader from "../../UI/UcHeader";
import TripForm from "../booking/TripForm";

const FleetDetails = ({ fleetId }) => {
  const fleetItem = ourfleetdata.find((item) => item?.id.toString() === fleetId)
  return (
    <>
      <UcHeader
        title={`Our Fleet `}
        path={`Home / Our Fleet / ${fleetItem?.name}`}
      />
      <Container>
        <div className="flex justify-between gap-6">
          <article>
            <div className="w-[600px] h-[340px] relative ">
              <Image
                src={`${fleetItem?.fleetDetailImg}`}
                priority
                fill
                alt="fleetDetailsImg"
                className=" object-cover"
              />
            </div>
              <h3 className="font-bold my-5 text-2xl">Vehicle Overview</h3>
              <span className="inline-block w-[70px] h-[3px] bg-primary"></span>
              <p className="sm:w-[700px] py-6">
                You don't want to bog the reader down, but you do want to make
                sure that they get a feel for the entire car. Don't just focus
                on the things you loved or hated. The review should cover the
                driving experience, the comfort, the ergonomics, the
                performance, the aesthetic, the mileage and practicality, and
                the price.
              </p>
            <table className="w-[800px] border border-primary text-left border-collapse">

            <thead>
            <tr>
                <th className="border text-left p-4">Specifications</th>
                <th className="border text-left p-4">Optional Extras</th>
                <th className="border text-left p-4">Additional Information</th>
              </tr>
            </thead>

              <tbody>
              <tr>
                <td className="border text-left p-4 bg-gray-200">
                  Passengers: {fleetItem?.passengers}
                </td>
                <td className="border text-left p-4">
                  Interior: {fleetItem?.interior}
                </td>
                <td className="border text-left p-4 bg-gray-200">
                  DVD Player: {fleetItem?.dvd}
                </td>
              </tr>
              <tr>
                <td className="border text-left p-4 ">
                  Iphone Charger: {fleetItem?.iphone_charge}
                </td>
                <td className="border text-left p-4 bg-gray-200">
                  On Board Drinks: {fleetItem?.drinks}
                </td>
                <td className="border text-left p-4">
                  On Board Snacks: {fleetItem?.snacks}
                </td>
              </tr>
              <tr>
                <td className="border text-left p-4 bg-gray-200">
                  Fully Insured: {fleetItem?.insured}
                </td>
                <td className="border text-left p-4 ">
                  Smoking: {fleetItem?.smoking}
                </td>
                <td className="border text-left p-4">
                  Surround Sound: {fleetItem?.surround_sound}
                </td>
              </tr>
              <tr>
                <td className="border text-left p-4 ">
                  On Board Wifi: {fleetItem?.wifi}
                </td>
                <td className="border text-left p-4">
                  Bag Capacity: {fleetItem?.bags}
                </td>
                <td className="border text-left p-4 bg-gray-200">
                  LCD Screens: {fleetItem?.lcd_screens}
                </td>
              </tr>
              </tbody>
            </table>
          </article>

          <article>
            <TripForm />
            <div className="border-l-2 ">
              <h2 className="text-xl font-bold py-6 pl-14 border-l-2 border-primary ">
                Pricing Options
              </h2>
              <div className="w-[300px] mx-auto bg-black text-light  p-8">
                <aside className="flex items-center justify-between border-b border-gray-500 py-4">
                  <FaStopwatch className="text-4xl " />

                  <p className="font-bold text-lg">
                    ${fleetItem?.price} / Hour <br />
                    <span className="text-gray-500 text-[16px] font-normal">
                      + fuel and roll surcharges
                    </span>
                  </p>
                </aside>

                <aside className="flex items-center justify-between border-b border-gray-500 py-4">
                  <FaCalendar className="text-4xl " />

                  <p className="font-bold text-lg">
                    ${parseFloat(fleetItem?.price - 80) * 2} / Day <br />
                    <span className="text-gray-500 text-[16px] font-normal">
                      + fuel and roll surcharges
                    </span>
                  </p>
                </aside>

                <aside className="flex items-center justify-between py-4">
                  <MdLocalAirport className="text-4xl " />

                  <p className="font-bold text-lg">
                    ${parseFloat(fleetItem?.price) - 110} / Airport Transfer{" "}
                    <br />
                    <span className="text-gray-500 text-[16px] font-normal">
                      + fuel and roll surcharges
                    </span>
                  </p>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </>
  );
};

export default FleetDetails;
