const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                
               <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter username"
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
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
                        {" Don't"} have an account? Register
                    </a>
                    <div>
                        <button className="btn btn-block mt-2 btn-sm bg-gray-600 text-white">Login</button>
                    </div>
               </form>
            </div>
        </div>
    )
}

export default Login;


//STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     Login
//                     <span className="text-blue-500"> ChatApp</span>
//                 </h1>
                
//                <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-white">Username</span>
//                         </label>
//                         <input 
//                             type="text"
//                             placeholder="Enter username"
//                             className="w-full input input-bordered h-10 bg-gray-600 text-white"
//                         />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-white">Password</span>
//                         </label>
//                         <input 
//                             type="text"
//                             placeholder="Enter password"
//                             className="w-full input input-bordered h-10 bg-gray-600"
//                         />
//                     </div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
//                         {" Don't"} have an account? Register
//                     </a>
//                     <div>
//                         <button className="btn btn-block mt-2 btn-sm bg-gray-600 text-white">Login</button>
//                     </div>
//                </form>
//             </div>
//         </div>
//     )
// }

// export default Login;