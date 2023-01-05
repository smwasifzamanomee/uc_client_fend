import { GoUnmute, GoMute } from "react-icons/go";
import { useState } from "react";

const Work = () => {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className="lg:flex-1">
            <h1 className="text-xl text-gray-600 dark:text-gray-300 mt-6">
                How we work
            </h1>
            <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>
            <div className="mt-6 space-y-8 md:mt-8">
                {/* <img className="w-[950px] md:h-[350px]" src="/images/AboutUs/CarDriving.png" /> */}
                {/* video add */}
                <div className="md:-mt-20">
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
                    <div className="text-light hover:text-primary text-2xl md:-mt-28 md:ml-2 -mt-8 ml-2">
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

export default Work