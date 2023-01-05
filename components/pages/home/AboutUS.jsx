import Button from "../../UI/Button"
import { GoUnmute, GoMute } from "react-icons/go";
import { useState } from "react";

const AboutUS = () => {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div>
            <div className="lg:flex">
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] md:w-[1000px] bg-black">
                    <div className="max-w-xl">
                        <h2 className="text-2xl mb-4 font-semibold text-white dark:text-white lg:text-3xl">About Us</h2>
                        <span className="inline-block h-[2px] w-12 rounded bg-[#CC4452] mb-6"></span>

                        <p className="mt-2 text-sm text-white dark:text-white lg:text-base">
                            A chauffeur is someone employed to look after the needs of the passenger as well as the operation of the motor vehicle. A chauffeur is an experienced, licensed professional. A chauffeur will serve your every need; from security, to booking reservations, sourcing restaurants, school runs and errands.</p>

                        <div className="mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <Button width={"w-[200px] text-light"}>Learn More</Button>

                        </div>
                    </div>
                </div>
                {/* <img className="w-[952px]" src="/images/AboutUs/CarDriving.png" /> */}
                {/* <iframe className="lg:w-[952px] lg:h-[512px]"src="https://www.youtube.com/embed/nmhx5Tt7kXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                {/* video add */}
                <div className="">
                    <video
                        // poster="images/videos/video.gif"
                        muted={isMuted}
                        loop
                        autoPlay
                        className="lg:h-[512px]"
                    >
                        <source src="images/videos/video1.mp4" />
                    </video>
                    {/* Controls of mute and unmute button */}
                    <div className="text-light hover:text-primary text-2xl md:-mt-8 md:ml-2 -mt-8 ml-2">
                        <span
                            onClick={() => setIsMuted((prev) => !prev)}
                            className="absolute"
                        >
                            {isMuted ? <GoMute /> : <GoUnmute />}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUS