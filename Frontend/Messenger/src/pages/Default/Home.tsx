import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="p-1">
			<h1 className="text-3xl text-red-700">Home Page</h1>
			<br />
			<Link
				to="/login"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				Login
			</Link>
			<Link
				to="/sign-up"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				Sign up
			</Link>
		</div>
	);
};

export default Home;
