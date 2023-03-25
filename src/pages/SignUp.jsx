import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import OAuth from './components/OAuth';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const { name, email, password } = formData

    const handleInput = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,

        }))
    }

    return (
        <section>
            <h1 className='text-center font-bold text-3x1 mt-6'>
                Sign Up
            </h1>

            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" alt="key"
                        className='w-full rounded-2xl' />
                </div>

                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form>
                        <input
                            className='mb-6 w-full px-4 py-2 text-xl- text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            type="text"
                            value={name}
                            id='name'
                            onChange={handleInput}
                            placeholder="Full Name"
                        />
                        <input
                            className='mb-6 w-full px-4 py-2 text-xl- text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            type="email"
                            value={email}
                            id='email'
                            onChange={handleInput}
                            placeholder="Email Address"
                        />

                        <div className='relative' mb-6>
                            <input
                                className='w-full px-4 py-2 text-xl- text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                                type={showPassword ? "text" : "password"}
                                value={password}
                                id='password'
                                onChange={handleInput}
                                placeholder="Password"
                            />

                            {
                                showPassword ? (
                                    <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer'
                                        onClick={() => setShowPassword(
                                            (prevState) => !prevState)
                                        } />
                                ) : <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPassword(
                                    (prevState) => !prevState)
                                } />
                            }
                        </div>

                        <div className='flex justify-between text-sm sm:text-lg'>
                            <p className='mb-6 '>
                                Have an account?
                                <a href="/sign-In" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Sign In</a>
                            </p>
                            <p>

                                <a href="/forget-password" className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1'>Forget Password?</a>
                            </p>

                        </div>
                        <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg blue transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type='submit'>Sign Up</button>
                        <div className='flex items-center my-4
                    before:border-t before:flex-1
                    before:border-gray-300
                    after:border-t after:flex-1
                    after:border-gray-300'>
                            <p className='text-center font-semibold mx-4'>OR</p>
                        </div>
                        <OAuth />
                    </form>

                </div>
            </div>

        </section>

    )
}

export default SignUp
