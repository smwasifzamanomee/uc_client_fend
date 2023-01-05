// FleetCard Icons
import { BsStarFill } from "react-icons/bs";
import { FaCarAlt, FaCcVisa, FaRegCalendarCheck } from "react-icons/fa";

//AboutusButton Icon
import { MdKeyboardArrowRight } from 'react-icons/md'


//Navigation
const navigation = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "Our Fleet", route: "/our-fleet" },
  { id: 5, name: "About Us", route: "/aboutus" },
  { id: 6, name: "Contact Us", route: "/contactus" },
  { id: 7, name: "Organization", route: "/organization" }
];

// FleetCardData
const FleetCardSubData = [
  {
    id: 1,
    icon: <FaRegCalendarCheck />,
    title: "Easy Online Booking",
    description:
      "Best car booking services online. Outsource your car booking project and get it quickly done and delivered remotely online.",
  },
  {
    id: 2,
    icon: <BsStarFill />,
    title: "Professional Drivers",
    description:
      "A Driver is a professional who drives clients around in an efficient, safe and timely manner.",
  },
  {
    id: 3,
    icon: <FaCarAlt />,
    title: "Big Fleet Of Vehicles",
    description:
      "These vehicles are the foundation of many businesses and can range in type from taxi cabs, rental cars and trucks.",
  },
  {
    id: 4,
    icon: <FaCcVisa />,
    title: "Online Payment",
    description:
      "Online payments refer to the electronic exchange of currency through the internet.",
  },
];

//TopCities Data
const TopCitiesData = [
  {
    id: 1,
    image: "/images/intercity/london.png",
    title: "London",
    description: "20 routes to/from this city",
  },
  {
    id: 2,
    image: "/images/intercity/newyork.png",
    title: "New York",
    description: "8 routes to/from this city",
  },
  {
    id: 3,
    image: "/images/intercity/berlin.png",
    title: "Berlin",
    description: "6 routes to/from this city",
  },
  {
    id: 4,
    image: "/images/intercity/losangels.png",
    title: "Los Angeles",
    description: "5 routes to/from this city",
  },
];
//TopCities Data


// TopRoutesData
const TopRoutesData = [
  {
    id: 1,
    to: "Dubai",
    from: "Abu Dhabi",
    destination: "1h 15m  136km",
  },
  {
    id: 2,
    to: "London",
    from: "Cardiff",
    destination: "3h 00m  149mi",
  },
  {
    id: 3,
    to: "New York",
    from: "East Hampton",
    destination: "2h 00m  98mi",
  },
  {
    id: 4,
    to: "London",
    from: "Cambridge",
    destination: "1h 30m 72mi",
  },
  {
    id: 5,
    to: "London",
    from: "Oxford",
    destination: "1h 30m  56mi",
  },
  {
    id: 6,
    to: "Berlin",
    from: "Rostock",
    destination: "2h 30m 236km",
  },
  {
    id: 7,
    to: "London",
    from: "Paris",
    destination: "5h 45m  186mi",
  },
  {
    id: 8,
    to: "New York",
    from: "Philadelphia",
    destination: "1h 45m  95mi",
  },
];

const PhotoGalleryData = [
  {
    id: 1,
    image: '/images/PhotoGallery/image1.jpg',
  },
  {
    id: 2,
    image: '/images/PhotoGallery/image2.jpg',
  },
  {
    id: 3,
    image: './images/PhotoGallery/image3.jpg',
  },
  {
    id: 4,
    image: '/images/PhotoGallery/image4.jpg',
  },
  {
    id: 5,
    image: '/images/PhotoGallery/image5.jpg',
  },
  {
    id: 6,
    image: '/images/PhotoGallery/image6.jpg',
  },
];

const ourfleetdata = [
  {
    id: 1,
    img: "/images/ourfleet/audi_sedan.png",
    name: "marcedes van",
    price: 140,
    passengers: 6,
    bags: 3,
    fleetDetailImg: "/images/ourfleet/fleetDetails.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 2,
    img: "/images/ourfleet/fordparty_bus.png",
    name: "ford party bus",
    price: 240,
    passengers: 8,
    bags: 5,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 3,
    img: "/images/ourfleet/audi_sedan.png",
    name: "marcedes sedan",
    price: 190,
    passengers: 6,
    bags: 6,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 4,
    img: "/images/ourfleet/audi_sedan.png",
    name: "audi grand sedan",
    price: 130,
    passengers: 4,
    bags: 2,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 5,
    img: "/images/ourfleet/lincoln.png",
    name: "lincoln mkt",
    price: 190,
    passengers: 6,
    bags: 3,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 6,
    img: "/images/ourfleet/cadillac.png",
    name: "cadillac excalade",
    price: 150,
    passengers: 6,
    bags: 4,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 7,
    img: "/images/ourfleet/bmw_sedan.png",
    name: "bmw grand sedan",
    price: 110,
    passengers: 4,
    bags: 2,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 8,
    img: "/images/ourfleet/audi_sedan.png",
    name: "marcedes van",
    price: 140,
    passengers: 6,
    bags: 3,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 9,
    img: "/images/ourfleet/fordparty_bus.png",
    name: "ford party bus",
    price: 240,
    passengers: 8,
    bags: 5,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 10,
    img: "/images/ourfleet/audi_sedan.png",
    name: "marcedes sedan",
    price: 190,
    passengers: 6,
    bags: 6,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 11,
    img: "/images/ourfleet/audi_sedan.png",
    name: "audi grand sedan",
    price: 130,
    passengers: 4,
    bags: 2,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  },
  {
    id: 12,
    img: "/images/ourfleet/lincoln.png",
    name: "lincoln mkt",
    price: 190,
    passengers: 6,
    bags: 3,
    fleetDetailImg: "/images/ourfleet/fleetDetails.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, et laudantium. Nostrum, nemo. Delectus dignissimos, voluptatibus ut velit, eveniet est dolores id, quam repudiandae neque reiciendis a accusamus repellendus alias.",
    interior: "black leather",
    dvd: "yes",
    wifi: "yes",
    iphone_charge: "yes",
    drinks: "yes",
    snacks: "yes",
    insured: "yes",
    smoking: "no",
    surround_sound: "yes",
    lcd_screens: "yes",
  }
];

const AboutusButtonData = [
  {
    id: 1,
    title: "Our Services",
    icon: <MdKeyboardArrowRight />
  },
  {
    id: 2,
    title: "Photo Gallery",
    icon: <MdKeyboardArrowRight />
  },
  {
    id: 3,
    title: "Book Now",
    icon: <MdKeyboardArrowRight />
  }
]

export {
  navigation,
  FleetCardSubData,
  TopCitiesData,
  TopRoutesData,
  ourfleetdata,
  PhotoGalleryData,
  AboutusButtonData
};

