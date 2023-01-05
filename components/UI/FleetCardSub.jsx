import { FleetCardSubData } from "../../data/data";

const FleetCardSub = () => {
  return (
    <section className="sm:max-w-6xl md:max-w-7xl mx-auto py-12 px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
          FleetCardSubData.map((item) => {
            return (
              <div key={item.id} className="p-6 flex gap-6">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16  mb-5 text-primary border-solid border-2 border-primary">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div>
                  <h1 className="mx-auto mb-4 text-2xl  font-light leading-none tracking-tighter text-neutral-600 lg:text-2xl">
                    {item.title}
                  </h1>
                  <span className="inline-block h-[2px] w-12 rounded bg-[#CC4452] mb-4"></span>
                  <p className=" mx-auto text-base leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })
          }
        </div>
  
    </section>
  );
};

export default FleetCardSub;
