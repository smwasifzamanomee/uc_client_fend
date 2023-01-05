import OtpInput from "react18-input-otp";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../../config";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const Index = () => {
    const [token, setToken] = useState("");

    const router = useRouter();

    const handleChange = (token) => setToken(token);

    // Verify user 

    const verifyurl = API_URL+"v1/validate-token/"
    
    const validateToken = async (validate) => {
        const res = await axios.post(verifyurl, validate)
        return res.data
    }
    const {mutate, isLoading, error, data:resData} = useMutation(validateToken)

    const handleUserValidation = async (e) => {
        await e.preventDefault()

        const validate = {
            id: router.query.user_id,
            token
        }
        mutate(validate,
            {
                onSuccess: (data) => {
                    alert("User verified successfully");
                    router.push('/login')
                },
                onError: (error) => {
                    alert("Invalid OTP");
                }
            }
            )
        
    }

    //Resend OTP 

    const resendopturl = API_URL+"v1/resend-token/"

    const handleResendOTP = async (e) => {
        await e.preventDefault()
        mutate({id: router.query.user_id},
            {
                onSuccess: (data) => {
                    alert("OTP sent successfully");
                }
            }
        )
    }

    return (
        <div>


            {/* opt */}
            <section>
                <div className="w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="grid grid-cols-1">
                        <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                            <div className="p-6 lg:text-center">
                                <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Email verification</h4>
                                <p className="mt-3 text-base leading-relaxed text-gray-500">Enter or paste the OTP sent on your email</p>
                                <p className="text-purple-500">{router.query.email}</p>
                                {/* opt section div */}
                                <div className="text-center md:pl-[105px] pt-6">                                    
                                
                                <OtpInput
                                // className="rounded-md w-[60px] h-[54px] text-[12px] text-black font-normal outline-none m-3"
                                    value={token}
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
                                    <button onClick={handleUserValidation} className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primary rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
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
