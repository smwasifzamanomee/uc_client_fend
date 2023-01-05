import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import UcHeader from "../../components/UI/UcHeader";

const ContactSub = () => {
  return (
    <>
      <UcHeader title={"Contact Us"} path="Home / Contact Us" />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6 ">
            <div className="flex-1 lg:w-1/2 lg:mx-6 mb-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 className="text-lg font-medium text-gray-700">
                  What do you want to ask
                </h1>

                {/* Contact form */}
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Subject
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                    submit
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex-1">
              <h1 className="text-xl text-gray-600 dark:text-gray-300">
                Get In Touch
              </h1>
              <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start mb-8 text-gray-600">
                Do you have a RFQ or questions about our services? <br/> Send us an email and we answer you the same day. If you need a car service with urgency, please call or text us at 1800-1111-2222 </p>
              </div>

              <h1 className="text-xl text-gray-600 dark:text-gray-300">
                Contact Detail
              </h1>
              <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start ">
                  <MdLocationPin className="text-primary text-xl" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    700 5th Avenue, New York City, United States
                  </span>
                </p>

                <p className="flex items-start ">
                  <HiPhone className="text-primary text-xl" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    1800-1111-2222
                  </span>
                </p>

                <p className="flex items-start ">
                  <MdEmail className="text-primary text-xl" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    bookingiexample.com
                  </span>
                </p>
              </div>

              {/* Social Icon */}
              <div className="mt-10 w-80 md:mt-10">
                <h3 className="text-xl text-gray-600 dark:text-gray-300 ">
                  Social Media
                </h3>
                <span className="inline-block h-[2px] w-12 rounded bg-primary"></span>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    className="mx-1.5 dark:hover:text-gray-400 text-primary transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>

                  <a
                    className="mx-3 dark:hover:text-gray-400 text-primary transition-colors duration-300 transform hover:text-purple-700"
                    href="#"
                  >
                    <FaInstagram className="text-xl" />
                  </a>

                  <a
                    className="mx-3 dark:hover:text-gray-400 text-primary transition-colors duration-300 transform hover:text-red-700"
                    href="#"
                  >
                    <SlSocialPintarest className="text-xl" />
                  </a>

                  <a
                    className="mx-3 dark:hover:text-gray-400 text-primary transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <FaTwitter className="text-xl" />
                  </a>

                  <a
                    className="mx-3 dark:hover:text-gray-400 text-primary transition-colors duration-300 transform hover:text-red-700"
                    href="#"
                  >
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  map section */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.192341544262!2d89.21787661546064!3d23.163179084882184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff112b936deedb%3A0xaab0bd7d56defdd3!2sMiicon!5e0!3m2!1sen!2sbd!4v1669180005162!5m2!1sen!2sbd"
          width="100%"
          height="600"
          // color=""
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactSub;
