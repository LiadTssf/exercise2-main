import React from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const NavigateMainPage = () => {
        navigate("/MainPage")
    }

    return (
        <div
            className="flex h-screen w-full items-center justify-center bg-cover bg-center px-5 sm:px-0"
            style={{
                backgroundImage: `url(https://www.veeforu.com/wp-content/uploads/2022/10/Purple-color-linear-gradient-background..png)`,
            }}
        >
            <div className="flex w-full max-w-sm overflow-hidden rounded-lg border bg-white shadow-lg lg:max-w-4xl">
                <div
                    className="hidden bg-blue-700 bg-cover md:block lg:w-1/2"
                    style={{
                        backgroundImage: `url(https://media.istockphoto.com/id/1305998573/vector/woman-with-pencil-marking-completed-tasks-on-to-do-list-concept-of-time-management-work.jpg?s=612x612&w=0&k=20&c=F_P6Ke0ubUk1rj7TmF4RMHN7SySW74ZVJOqi4CyHMJU=)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-center text-2xl font-bold text-gray-600">
                        Welcome back!
                    </p>
                    <p className="mb-4 text-center text-gray-500">
                        Track your habits and share your progress with friends
                    </p>
                    <div className="mt-4">
                        <label className="mb-2 block text-sm font-bold text-gray-700">
                            Email Address
                        </label>
                        <input
                            className="block w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:outline-2 focus:outline-green-500"
                            type="email"
                            required
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="mb-2 block text-sm font-bold text-gray-700">
                                Password
                            </label>
                        </div>
                        <input
                            className="block w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:outline-2 focus:outline-green-500"
                            type="password"
                        />
                        <a
                            href="#"
                            className="mt-2 w-full text-end text-xs text-gray-500 hover:text-gray-900"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={NavigateMainPage}
                            className="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-400"
                        >
                            Login
                        </button>
                    </div>
                    <a
                        href="#"
                        className="mt-4 flex items-center justify-center rounded-lg border bg-white shadow-md hover:bg-gray-100"
                    >
                        <div className="flex w-full justify-center px-5 py-3">
                            <div className="min-w-[30px]">
                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#FFC107"
                                    />
                                    <path
                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                        fill="#FF3D00"
                                    />
                                    <path
                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                        fill="#4CAF50"
                                    />
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#1976D2"
                                    />
                                </svg>
                            </div>
                            <div className="flex w-full justify-center">
                                <h1 className="whitespace-nowrap font-bold text-gray-600">
                                    Sign in with Google
                                </h1>
                            </div>
                        </div>
                    </a>
                    <div className="mt-4 flex w-full items-center text-center">
                        <a
                            href="#"
                            className="w-full text-center text-xs capitalize text-gray-500"
                        >
                            Don&apos;t have an account yet?
                            <span className="text-green-500"> Sign Up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
