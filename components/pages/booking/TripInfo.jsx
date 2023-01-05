import { FaCheck } from "react-icons/fa"

const TripInfo = () => {
  return (
    <>
         {/* Information */}
         <div className="w-[800px] border p-12">
          <h2 className="font-bold text-2xl ">Online Reservations</h2>
          <span className="w-[70px] h-[3px] bg-primary inline-block"></span>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            blanditiis molestiae vel fuga repellat alias maiores, quas non
            tempora illo ex. Non quod praesentium labore reprehenderit assumenda
            consectetur officia natus.
          </p>
          <div className="sm:flex items-center gap-20 my-5">
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-primary" /> Lorem ipsum dolor sit.
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default TripInfo