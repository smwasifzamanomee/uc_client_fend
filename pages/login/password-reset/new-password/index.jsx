import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config";

const NewPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const router = useRouter();

    useEffect(() => {
        if (router.query.email === undefined) {
            router.push('/login')
        }
    }, [])

    const email = router.query.email

    const confirmurl = API_URL + "v2/password-reset/confirm/"

    const {mutateAsync, isLoading, error, data} = useMutation(() => axios.post(confirmurl, {email: email, password: password, code : router.query.token}), {
        onSuccess: (data) => {
            alert("Password changed successfully");
            router.push('/login')
        },
        onError: (error) => {
            alert("Password not changed");
            console.log(error);
        }
    })

    const handleConfirmation = async (e) => {
        await e.preventDefault()     
        if (password === confirmpassword) {
            await mutateAsync()
        }
    }

    return (
        <div>
            <section>
                <div className="w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="grid grid-cols-1">
                        <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                            <div className="p-6 lg:text-center">
                                <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">New Password</h4>
                                <p className="mt-12 text-left text-base leading-relaxed text-gray-500">New password</p>
                                <form onSubmit={handleConfirmation}>
                                <div>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} label={"password"} type={"password"} placeholder={"Enter your new password"} className="block w-full px-4 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" required/>
                                </div>

                                <p className="mt-6 text-left text-base leading-relaxed text-gray-500">Confirm password</p>

                                <div>
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} label={"Confirm Password"} type={"password"} placeholder={"Enter your confirm password"} className="block w-full px-4 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" required/>
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

export default NewPassword