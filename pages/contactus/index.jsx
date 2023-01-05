import ContactSub from "./ContactSub";
import HorizontalLayout from "../../layout/HorizontalLayout";
import VerticalLayout from "../../layout/VerticalLayout";
import accessToken from "../../components/auth/accessToken";

const ContactUs = () => {

  return (
    <>
      <HorizontalLayout className={"hidden sm:block"}>
        <ContactSub />
      </HorizontalLayout>
      <VerticalLayout className={"block sm:hidden"}>
        <ContactSub />
      </VerticalLayout>
    </>
  );
};

export default ContactUs;
