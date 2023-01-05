import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { getSession, useSession } from "next-auth/react";
import Main from "../components/pages/home/main";
import HorizontalLayout from "../layout/HorizontalLayout";
import VerticalLayout from "../layout/VerticalLayout";

export default function Home(session) {

  return (
    <>
    {/* Desktop Layout */}
      <HorizontalLayout className={"hidden sm:block"}>
        {/* The main component represent all section of home page */}
        <Main />
      </HorizontalLayout>
      
      {/* Mobile Layout */}
      <VerticalLayout className={"block sm:hidden"}>
        {/* The main component represent all section of home page */}
        <Main />
      </VerticalLayout>
    </>
  );
}


// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:4000/api/auth/session');
//   const data = await res.json()
//   return {
//     props: {session: data}
//   }
// }