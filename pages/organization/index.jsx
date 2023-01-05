import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";

const index = () => {

    const [organization_name, setOrganization_name] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [bank_name, setBank_name] = useState("")
    const [bank_account_number, setBank_account_number] = useState("")
    const [license_number, setLicense_number] = useState("")
    const [license_file, setLicense_file] = useState("")
    const [password, setPassword] = useState("")

    const handleOrgRegister = async (e) => {
        e.preventDefault();
        const userDetails = {
            organization_name,
            first_name,
            last_name,
            email,
            phone,
            address,
            bank_name,
            bank_account_number,
            license_number,
            license_file,
            password
        };

        const url = "http://192.168.0.249:8000/api/v1/signup/organization/";



        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        const data = await res.json();
        console.log(data);

    }


    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/4 bg-[url('/images/Hero/orgReg.jpg')]"></div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Sign Up
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit ame consectetur emet
                        </p>
                        <form onSubmit={handleOrgRegister}>
                            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div className="flex flex-col">
                                    <label className="block text-sm text-gray-600 dark:text-gray-200">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company_name"
                                        value={organization_name}
                                        onChange={(e) => setOrganization_name(e.target.value)}
                                        // id="_name"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateName(e);
                                        // }}
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block text-sm text-gray-600 dark:text-gray-200">
                                        Owner First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={first_name}
                                        onChange={(e) => setFirst_name(e.target.value)}
                                        // id="_name"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateName(e);
                                        // }}
                                        placeholder="Owner Name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block text-sm text-gray-600 dark:text-gray-200">
                                        Owner Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={last_name}
                                        onChange={(e) => setLast_name(e.target.value)}
                                        // id="_name"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateName(e);
                                        // }}
                                        placeholder="Owner Name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block text-sm text-gray-600 dark:text-gray-200">
                                        Phone{" "}
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        // id="phone"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateNumber(e);
                                        // }}
                                        placeholder={"XXXXXXXXXX"}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block text-sm text-gray-600 dark:text-gray-200">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        // id="email"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateEmail(e);
                                        // }}
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
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        // id="address"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateAddress(e);
                                        // }}
                                        placeholder="Present Address"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block  text-sm text-gray-600 dark:text-gray-200">
                                        Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        name="Bank_Name"
                                        value={bank_name}
                                        onChange={(e) => setBank_name(e.target.value)}
                                        // id="address"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateAddress(e);
                                        // }}
                                        placeholder="Bank Name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block  text-sm text-gray-600 dark:text-gray-200">
                                        Bank Account Number
                                    </label>
                                    <input
                                        type="text"
                                        name="Bank_Account_Number"
                                        value={bank_account_number}
                                        onChange={(e) => setBank_account_number(e.target.value)}
                                        // id="address"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateAddress(e);
                                        // }}
                                        placeholder="Bank Account Number"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block  text-sm text-gray-600 dark:text-gray-200">
                                        License Number
                                    </label>
                                    <input
                                        type="text"
                                        name="License_Number"
                                        value={license_number}
                                        onChange={(e) => setLicense_number(e.target.value)}
                                        // id="address"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //   validateAddress(e);
                                        // }}
                                        placeholder="License Number"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block  text-sm text-gray-600 dark:text-gray-200">
                                        License File
                                    </label>
                                    <input
                                        type="file"
                                        name="License_File"
                                        value={license_file}
                                        onChange={(e) => setLicense_file(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block  text-sm text-gray-600 dark:text-gray-200">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        // id="password1"
                                        // className={styles}
                                        required
                                        // onChange={(e) => {
                                        //     validatePassword(e);
                                        // }}
                                        placeholder="Enter Password"
                                    />
                                </div>

                            </div>
                            <div
                                className="mt-10 
                            md:w-[400px] mx-auto">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 mb-6">
                                    <span>Sign Up </span>
                                </button>
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
    )
}

export default index