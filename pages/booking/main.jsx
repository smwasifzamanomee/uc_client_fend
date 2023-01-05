import Booking from "../../components/pages/booking/Booking"
import HorizontalLayout from "../../layout/HorizontalLayout"
import VerticalLayout from "../../layout/VerticalLayout"

const BookingMethod = () => {
    return (
    <>
    <HorizontalLayout className={'hidden sm:block'}>
    <Booking />
    </HorizontalLayout>

    <VerticalLayout className={'block sm:hidden'}>
    <Booking />
    </VerticalLayout>
    </>
  )
}

export default BookingMethod