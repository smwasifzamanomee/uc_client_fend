import HorizontalLayout from "../../layout/HorizontalLayout"
import VerticalLayout from "../../layout/VerticalLayout"
import AboutUsSub from "./AboutUsSub"

const About = () => {
  return (
    <>
    <HorizontalLayout className={'hidden sm:block'}>
      <AboutUsSub />
    </HorizontalLayout>
    <VerticalLayout className={'block sm:hidden'}>
      <AboutUsSub />
    </VerticalLayout>
       
    </>

  )
}

export default About