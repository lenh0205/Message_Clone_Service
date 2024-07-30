import { Link, useNavigate } from "react-router-dom";
import MessengerIcon from "../../assets/messenger.svg";
import bgCoverUri from "../../assets/images/fly_up.jpg";
import { FormEvent, useState } from "react";

const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPasword] = useState("");
	const handleSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		localStorage.setItem("userInfo", JSON.stringify({ email, password }));
		navigate("/messenger");
	};

	return (
		<section>
			<div
				className={`rem:lg:w-[1100px] lg:mx-[auto] lg:flex lg:flex-col lg:items-center lg:justify-center lg:mx-auto lg:h-screen`}
			>
				<Link
					to="/"
					className="lg:flex lg:items-center lg:mb-6 lg:text-2xl lg:font-semibold text-gray-900 "
				>
					<img
						className="lg:w-8 lg:h-8 lg:mr-2 "
						src={MessengerIcon}
						alt="logo"
					/>
					<span className="rem:lg:text-[24px]">Messenger</span>
				</Link>
				<div className="lg:w-full bg-white lg:rounded-lg lg:shadow lg:flex ">
					<div
						style={
							{ "--image-url": `url(${bgCoverUri})` } as React.CSSProperties
						}
						className={`lg:flex-1 lg:rounded-tl-lg lg:rounded-bl-lg rem:lg:h-[720px] bg-[image:var(--image-url)] bg-[position:45%] bg-no-repeat  bg-cover object-cover`}
					></div>
					<div className={`lg:flex-1 lg:flex lg:flex-col lg:items-center `}>
						<div className="lg:rem:w-[320px] lg:rem:mt-[50px] ">
							<h1
								style={
									{
										"--tw-shadow-color": `rgba(0,0,0,0.3)`
									} as React.CSSProperties
								}
								className="lg:inline lg:rem:text-[25px] lg:font-bold lg:text-shadow "
							>
								Sign in
							</h1>
							<p className="lg:rem:text-[12px] lg:text-gray-400 lg:rem:mt-[20px] ">
								Create your account in a seconds
							</p>

							<form className="lg:max-w-sm lg:mx-auto lg:rem:mt-[25px]">
								<div className="mb-5">
									<input
										type="text"
										id="firstName"
										className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
										placeholder="First Name:"
										required
									/>
								</div>
								<div className="mb-5">
									<input
										type="text"
										id="lastName"
										className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
										placeholder="Last Name:"
										required
									/>
								</div>
								<div className="mb-5">
									<input
										type="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
										placeholder="Email Address:"
										required
									/>
								</div>
								<div className="mb-5">
									<input
										type="password"
										id="password"
										className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
										placeholder="Create Password:"
										required
									/>
								</div>
								<div className="lg:rem:mt-[40px] flex items-start mb-5">
									<div className="flex items-center h-5">
										<input
											id="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-purple-500  focus:bg-purple-500 "
											required
										/>
									</div>
									<label className="ms-2 lg:rem:text-[12px] font-medium text-gray-400 ">
										I agree to the terms and privacy policy
									</label>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
								>
									Create an account
								</button>
								<p className="lg:rem:mt-[30px] text-sm font-light text-gray-500 dark:text-gray-400">
									Already a member? &nbsp;
									<Link
										to="/login"
										className="font-medium text-purple-400 hover:underline dark:text-primary-500"
									>
										Login
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
