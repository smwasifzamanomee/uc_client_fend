import React from "react";
import { ourfleetdata } from "../../../data/data";
import FleetCard from "../../UI/FleetCard";
import FleetCardSub from "../../UI/FleetCardSub";

const OurFleet = () => {
  return (
    <section className="sm:max-w-6xl md:max-w-7xl mx-auto py-12 px-4">
      
      <div className=" text-center">
        <h1 className="text-3xl font-bold ">Our Fleet </h1>
        <span className="inline-block w-[50px] h-[3px] bg-primary my-4"></span>
        <p>
          A fleet vehicle is any motorized asset used by a company to transport
          people and products, conduct business, or assist <br/> with daily activity. 
          A fleet can range from a group of service cars, rental cars, and taxicabs.
        </p>
      </div>

      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-screen items-center gap-12 my-12">
        {ourfleetdata.slice(0, 8).map((fleet) => (
          <FleetCard key={fleet.id} fleet={fleet} />
        ))}
      </div>

      {/* FleetCard Sub section */}
      <FleetCardSub />
      
    </section>
  );
};

export default OurFleet;
