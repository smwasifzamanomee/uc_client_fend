import { useRouter } from "next/router";
import React from "react";
import FleetDetails from "../../components/pages/our-fleet/FleetDetails";
import HorizontalLayout from "../../layout/HorizontalLayout";
import VerticalLayout from "../../layout/VerticalLayout";

const Fleet = ({fleetId}) => {

  return (
    <>
      <HorizontalLayout className={'hidden sm:block'}>
        <FleetDetails fleetId={fleetId}/>
      </HorizontalLayout>

      <VerticalLayout className={'block sm:hidden'}>
        <FleetDetails fleetId={fleetId}/>
      </VerticalLayout>
    </>
  );
};

export default Fleet;

export const getServerSideProps = async({params}) => {
  const {fleetId} = params;
  return{
    props: {fleetId}
  }
}
