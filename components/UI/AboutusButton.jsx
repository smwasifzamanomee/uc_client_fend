import { AboutusButtonData } from "../../data/data"
const Test = () => {
    return (
       <div className="sm:w-[800px] mx-auto md:flex items-center justify-between gap-20">
       
        {
            AboutusButtonData.map(item =>  <a 
            key={item.id} 
            href="#"
            className=" w-[200px] sm:w-[250px] mx-auto grid grid-cols-4 items-center  no-underline bg-black md:my-0 my-3"
            >
            <p className="col-span-3 font-bold text-xl bg-black text-light py-6 text-center">{item.title}</p>
            <p className="col-span-1 text-3xl bg-primary text-light py-6 pl-4">{item.icon}</p>
        </a>)
        }

       </div>
    )
}

export default Test