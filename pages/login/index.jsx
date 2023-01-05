import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react';
import EmailValidationHelper from "../../components/helpers/EmailValidationHelper"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState(true);


  const [error, setError] = useState()
  const router = useRouter()
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let res = signIn("credentials", { email: email, password: password, redirect:false });
    res.then((data) => {
      if (data?.error) {
        alert("Invalid credentials");
      } else {
        alert("Login Successful")
        router.push("/");
      }
    }
    );
  }
  const styles = `appearance-none block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 ${
    warning
      ? "focus:border-primary dark:focus:border-primary focus:ring-primary"
      : "focus:border-green-600 dark:focus:border-green-600 focus:ring-green-600"
  } focus:outline-none focus:ring focus:ring-opacity-40`;

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

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-1/2 bg-[url('/images/Hero/login.jpg')]">
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Sign In</h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit ame consectetur emet</p>

            </div>

            <div className="mt-8">
              <form onSubmit={handleLogin}>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input onChange={(e) => validateEmail(e)}  label={"Email address"} type={"email"} placeholder={"Enter your email address"} name="email" className={styles} required/>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <Link href="/login/password-reset">
                      <button className="text-sm text-gray-400 focus:text-primary hover:text-primary hover:underline">Forgot password?</button>
                    </Link>

                  </div>

                  <input onChange={(e) => setPassword(e.target.value)} value={password} label={'Password'} type='password' placeholder={'Enter your password'} name='password' className={styles} required/>
                </div>
                <p className='text-red-500'>{error?.password}</p>

                <div className="mt-6">
                  <button type="submit" className="w-full px-4 py-4 tracking-wide text-lg text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-gray-400 focus:outline-none focus:bg-primary focus:ring focus:ring-blue-300 focus:ring-opacity-50 mb-6">
                    Sign in
                  </button>
                  <p className='text-center'> Don't have an account? <Link href={'/register'} className='text-primary p-1 underline'>Register</Link></p>
                  {/* or */}
                  <div className="inline-flex justify-center items-center w-full">
                    <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    <span className="absolute md:left-3/4 left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">or</span>
                  </div>
                  {/* end or */}

                  <button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6 rounded-full">
                    <FcGoogle className="text-3xl" />
                    <span className="ml-4">Log in with Google</span>
                  </button>
                  <button className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6 rounded-full">
                    <FaFacebookF className="text-3xl text-[#3b5998]" /> Log in with
                    Facebook
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login