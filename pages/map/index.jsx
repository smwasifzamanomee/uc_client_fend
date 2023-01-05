import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineSearch, MdGpsFixed } from "react-icons/md"


const apiKey = 'AIzaSyAKSPz1gj2oXdJ9Usl9x_dlBrYA_6PdsO4'
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';


// load google map api 

function loadAsyncScript(src) {
    return new Promise(resolve => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src
        })
        script.addEventListener("load", () => resolve(script));
        document.head.appendChild(script);
    })
}

const extractAddress = (place) => {

    const address = {
        city: "",
        state: "",
        zip: "",
        country: "",
        plain() {
            
            const city = this.city ? this.city + ", " : "";
            const zip = this.zip ? this.zip + ", " : "";
            const state = this.state ? this.state + ", " : "";
            return city + zip + state + this.country;
        }
    }

    if (!Array.isArray(place?.address_components)) {
        return address;
    }

    place.address_components.forEach(component => {
        const types = component.types;
        const value = component.long_name;

        if (types.includes("locality")) {
            address.city = value;
        }

        if (types.includes("administrative_area_level_2")) {
            address.state = value;
        }

        if (types.includes("postal_code")) {
            address.zip = value;
        }

        if (types.includes("country")) {
            address.country = value;
        }

    });

    return address;
}


function index() {

    const searchInput = useRef(null);
    const [address, setAddress] = useState({});

    // Search address onchange


    // init gmap script
    const initMapScript = () => {
        // if script already loaded
        if (window.google) {
            return Promise.resolve();
        }
        const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
        return loadAsyncScript(src);
    }

    // do something on address change
    const onChangeAddress = (autocomplete) => {
        const place = autocomplete.getPlace();
        setAddress(extractAddress(place));

        console.log("lacation",place.geometry.location);
    }

    // init autocomplete
    const initAutocomplete = () => {
        // console.log(searchInput.current);
        if (!searchInput.current) return;

        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

    }


    const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
        console.log(lat);
        console.log(lng);
        const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
        searchInput.current.value = "Getting your location...";
        fetch(url)
            .then(response => response.json())
            .then(location => {
                const place = location.results[0];
                const _address = extractAddress(place);
                setAddress(_address);
                searchInput.current.value = _address.plain();
            })
            
    }


    const findMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                reverseGeocode(position.coords)
            })
        }
    }





    // load map script after mounted
    useEffect(() => {
        initMapScript().then(() => initAutocomplete())
    }, []);



    return (
        <div className="index">
            <div>
                <div className="search">
                    <span><MdOutlineSearch /></span>
                    <input ref={searchInput} type="text" placeholder="Search location...." />
                    <button onClick={findMyLocation}><MdGpsFixed /></button>
                </div>

                <div className="address">
                    <p>City: <span>{address.city}</span></p>
                    <p>State: <span>{address.state}</span></p>
                    <p>Zip: <span>{address.zip}</span></p>
                    <p>Country: <span>{address.country}</span></p>
                </div>

            </div>
        </div>
    )
}

export default index