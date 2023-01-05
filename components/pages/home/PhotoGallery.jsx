import { PhotoGalleryData } from "../../../data/data"
const PhotoGallery = () => {
    return (
        < section className="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div>
                    <h1 className="sm:text-3xl lg:text-4xl text-2xl font-semibold title-font mb-2 text-gray-900">Photo Gallery</h1>
                    <span className="inline-block w-[50px] h-[3px] bg-primary my-4"></span>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The photo gallery acts as a marketing tool to draw attention to your photos among website visitors. It improves the status of your brand and provides a top-notch experience. However, the majority of photographers fail to tailor their photo galleries to their individual requirements. Present your beautiful images in a favorable light.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        PhotoGalleryData.map((item) => {
                            return (
                                <div className="lg:w-1/3 sm:w-1/2 p-4" key={item.id}>
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.image} />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section >
    )
}

export default PhotoGallery