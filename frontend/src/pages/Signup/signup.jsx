import { Link } from "react-router-dom";
import { GenderCheckBox } from "./GenderCheckBox";
import { useState } from "react";
import UserSignup from "../../hooks/userSignup";
const SignUp = () => {

    const[input, setInput] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''

    })

    const {signup, loading} = UserSignup();

    const handleCheckBoxChange = (gender) =>{
        setInput({...input, gender})
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(input)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">FullName</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Bob June"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                            value={input.fullName}
                            onChange={(e) => setInput({...input, fullName: e.target.value})}
                        />
                    </div>


                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Bobbin"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                            value={input.username}
                            onChange={(e) => setInput({...input, username: e.target.value})}
                        />
                    </div>


                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                            value={input.password}
                            onChange={(e) => setInput({...input, password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">ConfirmPassword</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
                        />
                    </div>
                    <GenderCheckBox onCheckboxChange = {handleCheckBoxChange} selectedGender={input.gender} />

                    <Link to={'/login'} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
                        Already have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block mt-2 btn-sm bg-gray-600 text-white">Sign Up</button>
                    </div>
                </form>
            </div>   
        </div>
            )
}

export default SignUp;



//================ STARTUP Code================//


/**
 import { GenderCheckBox } from "./GenderCheckBox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">FullName</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Bob June"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                        />
                    </div>


                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Bobbin"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                        />
                    </div>


                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">ConfirmPassword</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10 bg-gray-600 text-white"
                        />
                    </div>
                    <GenderCheckBox />

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
                        Already have an account?
                    </a>
                    <div>
                        <button className="btn btn-block mt-2 btn-sm bg-gray-600 text-white">Sign Up</button>
                    </div>
                </form>
            </div>   
        </div>
            )
}

export default SignUp;
 * */ 