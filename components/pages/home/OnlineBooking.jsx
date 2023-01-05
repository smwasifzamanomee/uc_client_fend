import Button from "../../UI/Button"

const OnlineBooking = () => {
  return (
    <div className="w-full lg:mt-20 bg-center bg-cover h-[32rem] bg-[url('/images/OnlineBooking/onlineBooking1.jpg')]">
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="mb-6 tracking-tight text-white uppercase lg:text-3xl">Book Online Today And Travel In Comfort <br /> On Your Next Trip</h1>
          <span className="inline-block h-[2px] w-16 rounded bg-[#CC4452] mb-6"></span>
          <p className="mt-3 text-white mb-6">
            Call Us On 1800-1111-2222 or Email booking@website.com
          </p>
          <Button width={"w-[200px] text-light"}>Online Booking</Button>
        </div>
      </div>
    </div>

  )
}

export default OnlineBooking