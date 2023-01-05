import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import EmailValidationHelper from "../../../components/helpers/EmailValidationHelper";
import { API_URL } from "../../config";

const ForgetPass = () => {
    const [email, setEmail] = useState('')
    const [warning, setWarning] = useState(true);
    const styles = `appearance-none block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 ${
        warning
          ? "focus:border-primary dark:focus:border-primary focus:ring-primary"
          : "focus:border-green-600 dark:focus:border-green-600 focus:ring-green-600"
      } focus:outline-none focus:ring focus:ring-opacity-40`;

    const router = useRouter()
    const url = API_URL + "v2/reset-password/"
    
        const { mutate, isLoading, error, data } = useMutation(() => axios.post(url, { "email": email}
        ), {
            onSuccess: (data) => {
                console.log(data);
                router.push({
                    pathname: '/login/password-reset/validate',
                    query: { email: email}

                }
                );
                alert("Check your email for password reset OTP");
            },
            onError: (error) => {
                alert("Email is not registered");
            }
        })
    
    

    const handleForgetPass = async (e) => {
        e.preventDefault();
        const res = mutate()
    }

    const validateEmail = (e) => {
        if(EmailValidationHelper(e.target.value)){
            setWarning(false)
            setEmail(e.target.value)
        }
        else{
            setWarning(true)
            setEmail("")
        }
    }


    return (
        <div>
            <section>
                <div className="w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="grid grid-cols-1">
                        <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                            <div className="p-6 lg:text-center">
                                <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Forget Password</h4>
                                <p className="mt-12 text-left text-base leading-relaxed text-gray-500">Email address</p>
                                <form onSubmit={handleForgetPass}>
                                    <div>
                                        <input onChange={(e) => validateEmail(e)} label={"Email address"} type={"email"} placeholder={"Enter your email address"} className={styles} required/>
                                    </div>

                                    <div className="mt-6">
                                        <Link href="/login">
                                            <button>
                                                <span className="text-orange-400">Back to Sign in</span>
                                            </button>
                                        </Link>
                                    </div>


                                    <div className="mt-6">
                                        <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primary rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                            <span>Send</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ForgetPass