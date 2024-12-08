import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/google.png";



const Login = () => {
    const { handleGoogleLogin, handleLogin, handleLogOut } = useContext(AuthContext);
    const [error, setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        handleLogin(email, password)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                setError(err.message)
            })
    }
    const googleLoginHandler = () => {
        handleGoogleLogin()
            .then(res => {
                navigate("/")
            })

    }

    return (
        <div className="">
            <div className="py-10 flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0">
                    <h2 className=" font-semibold text-2xl text-center mt-2">Login your account</h2>
                    <form onSubmit={handleSubmit} className="card-body pt-3 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" autoComplete="off" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-[#15415a] text-white font-bold">Login</button>
                        </div>

                        <div className="flex mt-4 border p-2 rounded-md items-center justify-center">
                            <img className="w-9" src={logo}></img>
                            <button className=" bg-white" onClick={googleLoginHandler}>Sign in with google</button>
                        </div>
                        {error && <p className="text-red-400">{error}</p>}
                    </form>
                    <p className="text-center mb-5 font-semibold">Dont’t Have An Account ? <Link to="/register"> <span className="text-orange-500">Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;