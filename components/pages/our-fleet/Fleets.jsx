import { ourfleetdata } from "../../../data/data";
import UcHeader from "../../UI/UcHeader";
import FleetCard from "../../UI/FleetCard";



const Fleets = () => {

  return (
    <>
       <UcHeader
       title='Our Fleet'
       path='Home / Our Fleet'
       />
        <section className="sm:max-w-6xl md:max-w-7xl mx-auto py-12 px-4">
          <div className="grid justify-items-center gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-h-screen items-center my-12">
            {ourfleetdata.map((fleet) => <FleetCard key={fleet.id} fleet={fleet}/>)}

          </div>
        </section>
    </>
  );
};

export default Fleets;
