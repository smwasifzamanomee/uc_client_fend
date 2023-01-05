
const UcHeader = ({title, path}) => {
  return (
    <div
    className={`bg-[url('/images/Hero/Untitled1.png')] w-full h-[20vh] object-cover flex justify-center items-center `}
  >
    <div className="text-center">
      <h1 className="font-bold text-light text-xl">{title}</h1>
      <p className="text-light capitalize text-xl">{path}</p>
    </div>
  </div>
  )
}

export default UcHeader