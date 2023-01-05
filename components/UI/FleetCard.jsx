import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";

const FleetCard = ({ fleet }) => {
  return (
    <div
      key={fleet?.id}
      className="shadow rounded border w-[280px] h-[400px] hover:-translate-y-5 transition-all duration-500"
    >
      <div className="w-[220px] h-[150px] mx-auto relative">
        <Image
          src={fleet?.img}
          fill
          className=" object-contain"
          alt={fleet?.img}
        />
      </div>
      <span className="inline-block w-full h-[1px] bg-gray-300 mt-4"></span>
      <Link href={`/our-fleet/${fleet?.id}`}>
        <Button className="w-[120px] ml-3 -translate-y-7 text-light">
          From ${fleet?.price}
        </Button>
      </Link>
      <div className="p-4">
        <h4 className=" capitalize">{fleet?.manufacturer}</h4>
        <span className="inline-block w-[60px] h-[3px] bg-primary my-4"></span>
        <p className="flex items-center gap-x-3">
          <FaCheck className="text-primary" /> {fleet?.passengers} Passengers
        </p>
        <p className="flex items-center gap-x-3">
          <FaCheck className="text-primary" /> {fleet?.bags} Bags
        </p>
      </div>
    </div>
  );
};

export default FleetCard;
