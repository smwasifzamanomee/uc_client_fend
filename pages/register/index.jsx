import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Button from "../../components/UI/Button";
import FormInput from "../../components/UI/FormInput";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import EmailValidationHelper from "../../components/helpers/EmailValidationHelper";
import { API_URL } from "../config";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(true);
  const [warningText, setWarningText] = useState(
    {
      email: "",
      password: "",
      phone: "",
    }
  );
  // const [confirmPassword, setConfirmPassword] = useState('')

  const styles = `appearance-none block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 ${
    warning
      ? "focus:border-primary dark:focus:border-primary focus:ring-primary"
      : "focus:border-green-600 dark:focus:border-green-600 focus:ring-green-600"
    } focus:outline-none focus:ring focus:ring-opacity-40`;

  const signup_fn = async (userDetails) => {
    const url = API_URL+"v1/signup/";
    return await axios.post(url, userDetails);
  };

  const { mutate, isLoading, data: singupData , isError, error} = useMutation(signup_fn);

  useEffect(() => {

  if (isError) {
    const resp = error.response.data
    if (resp.email) {
      setWarningText({
        email: "Email already exists",
      });
    }
    if (resp.phone) {
      setWarningText({
        phone: "Phone number is not valid",
      });
    }
  }
}, [isError, error])

  const handleRegister = (e) => {
    e.preventDefault();
    mutate(
      {
        first_name,
        last_name,
        email,
        password,
        phone,
        address,
      },
      {
        onSuccess: (value) => {
          if (value.status === 201) {
            router.push({
              pathname: "/register/verify",
              query: { user_id: value?.data?.id},

            });
          }
        },
      }
    );
  };


  const validatePassword = (e) => {
    setWarning(true);
    const password = e.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (passwordRegex.test(password)) {
      setPassword(password);
      setWarning(false);
    } else {
      setWarning(true);
    }
  };
  const validateConfirmPassword = (e) => {
    setWarning(true);
    const confirmPassword = e.target.value;
    if (confirmPassword === password) {
      setWarningText({
        password: "",
      });
      setWarning(false);
    } else {
      setWarning(true);
      setWarningText({
        password: "Passwords do not match",
      });
    }
  };
  const validateNumber = (e) => {
    const number = e.target.value;
    const part1 = number.slice(0, 3);
    const part2 = number.slice(3);
    const numberRegex = /^[0-9]{10}$/;
    const patternRegex = /(\+44)|(\+33)/;
    if (numberRegex.test(part2) && patternRegex.test(part1)) {
      setWarning(false);
      setPhone(number);
    } else {
      setWarning(true);
      setPhone("");
    }
  };
  const validateAddress = (e) => {
    const address = e.target.value;
    if (address.length > 0) {
      setAddress(address);
      setWarning(false);
    } else {
      setWarning(true);
      setAddress("");
    }
  };
  const validateEmail = (e) => {
    const email = e.target.value;
    if (EmailValidationHelper(email)) {
      setEmail(email);
      setWarning(false);
    } else {
      setWarning(true);
      setEmail("");
    }
  };
  const validateName = (e) => {
    let name = e.target.value.trim();
    const nameRegex = /^[a-zA-Z]+$/;
    if (nameRegex.test(name)) {
      if (e.target.name === "first_name") {
        setFirstName(name);
      } else {
        setLastName(name);
      }
      setWarning(false);
    } else {
      setWarning(true);
      if (e.target.name === "first_name") {
        setFirstName("");
      } else {
        setLastName("");
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/4 bg-[url('/images/Hero/reg.jpg')]"></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Sign Up
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit ame consectetur emet
            </p>
            <form onSubmit={handleRegister}>
              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div className="flex flex-col">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className={styles}
                    required
                    onChange={(e) => {
                      validateName(e);
                    }}
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className={styles}
                    required
                    onChange={(e) => {
                      validateName(e);
                    }}
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    Phone{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className={styles}
                    required
                    onChange={(e) => {
                      validateNumber(e);
                    }}
                    placeholder={"+44 or +33 XXXXXXXXXX"}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles}
                    required
                    onChange={(e) => {
                      validateEmail(e);
                    }}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block  text-sm text-gray-600 dark:text-gray-200">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className={styles}
                    required
                    onChange={(e) => {
                      validateAddress(e);
                    }}
                    placeholder="Present Address"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block  text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password1"
                    className={styles}
                    required
                    onChange={(e) => {
                      validatePassword(e);
                    }}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="flex flex-col h-24">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    className={styles}
                    required
                    onChange={(e) => {
                      validateConfirmPassword(e);
                    }}
                    placeholder="Retype Password"
                  />
                  
                </div>
                <div className="flex flex-col h-24 pt-8 pl-2">
                  
                  <p className="text-red-500"> {warningText.password}</p>
                  <p className="text-red-500"> {warningText.email}</p>
                  <p className="text-red-500"> {warningText.phone}</p>
                </div>
              </div>
              <div
                className="mt-10 
                            md:w-[400px] mx-auto"
              >
                <button
                  type="submit"
                  className="w-full px-6 py-4 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 mb-6"
                >
                  <span>Sign Up </span>
                </button>
                <p className="text-center">Do you have an account? <Link href={'/login'} className='underline p-1 text-primary'>Login</Link></p>
                
                {/* or */}
                <div className="inline-flex justify-center items-center w-full">
                  <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute md:left-3/4 left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
                    or
                  </span>
                </div>
                {/* end or */}

                <button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6 rounded-full">
                  <FcGoogle className="text-3xl" />
                  <span className="ml-4">Log in with Google</span>
                </button>
                <button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6 rounded-full">
                  <FaFacebookF className="text-3xl text-[#3b5998]" /> Log in
                  with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
