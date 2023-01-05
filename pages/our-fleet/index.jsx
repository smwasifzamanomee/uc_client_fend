import Fleets from "../../components/pages/our-fleet/Fleets";
import HorizontalLayout from "../../layout/HorizontalLayout";
import VerticalLayout from "../../layout/VerticalLayout";

const OurFleet = () => {
  return (
    <>
    <HorizontalLayout className="hidden sm:block">
      <Fleets />
    </HorizontalLayout>
      <VerticalLayout className="block sm:hidden">
      <Fleets />
      </VerticalLayout>
    </>
  );
};

export default OurFleet;
