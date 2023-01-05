import OtpInput from "react18-input-otp";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../../config";

const Index = () => {
    const [otp, setOtp] = useState("");

    const router = useRouter();

    const handleChange = (otp) => setOtp(otp);
    const verifyurl = API_URL + "v2/password-reset/validate/"
    const {mutate, isLoading, error, data} = useMutation(() => axios.post(verifyurl, {email: router.query.email, otp: otp}), {
        onSuccess: (data) => {
            router.push({
                pathname: '/login/password-reset/new-password',
                query: { 
                    email: router.query.email,
                    token: data?.data?.unique_code
                }
            }
            );
        },
        onError: (error) => {
            alert("OTP is incorrect");
        }
    })



    const handlePassValidation = async (e) => {
        await e.preventDefault()

        const res = mutate()
    }

    //Resend OTP 

    const resendopturl = API_URL+"v1/password-reset/resend/"

    const {mutateAsync, isLoading: resendisLoading, error: resenderror, data: resenddata} = useMutation(() => axios.post(resendopturl, {email: router.query.email}), {
        onSuccess: (data) => {
            alert("OTP sent to your email");
        },
        onError: (error) => {
            alert("Email is not registered");
        }
    })

    const handleResendOTP = async (e) => {
        await e.preventDefault()
        const res = await mutateAsync()


    }

    return (
        <div>


            {/* opt */}
            <section>
                <div className="w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="grid grid-cols-1">
                        <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                            <div className="p-6 lg:text-center">
                                <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Password verification</h4>
                                <p className="mt-3 text-base leading-relaxed text-gray-500">Enter or paste the OTP sent on your email</p>
                                <p className="text-purple-500">{router.query.email}</p>
                                {/* opt section div */}
                                <div className="text-center md:pl-[105px] pt-6"> 
                                                                   
                                
                                <OtpInput
                                // className="rounded-md w-[60px] h-[54px] text-[12px] text-black font-normal outline-none m-3"
                                    value={otp}
                                    onChange={handleChange}
                                    numInputs={4}
                                    separator={<span className="w-[8px]"></span>}
                                    isInputNum={true}
                                    shouldAutoFocus={true}
                                    inputStyle={{
                                        border: "1px solid black transparent",
                                        borderRadius: "8px",
                                        width: "54px",
                                        height: "54px",
                                        fontSize: "12px",
                                        color: "#000",
                                        fontWeight: "400",
                                        caretColor: "blue"
                                    }}
                                    focusStyle={{
                                        border: "1px solid #CFD3DB",
                                        outline: "none"
                                    }}
                                />
                                </div>

                                {/* Resend OTP  */}
                                <div className="mt-6">
                                    <button onClick={handleResendOTP}>
                                        <span className="text-orange-400"><h1 className="text-gray-500">if you didn't receive a code! </h1>Resend OTP</span> 
                                    </button>
                                </div>
                                
                                <div className="mt-6">
                                    <button onClick={handlePassValidation} className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primary rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                        <span>Verify</span> 
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Index
