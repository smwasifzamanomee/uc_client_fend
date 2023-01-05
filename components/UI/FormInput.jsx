import React from 'react'

const FormInput = ({label, type, placeholder, className, setValue, value}) => {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{label}</label>
            <input value={value} onChange={(e) => setValue(e.target.value)} type={type} placeholder={placeholder} className="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40" required/>
        </div>
    )
}

export default FormInput