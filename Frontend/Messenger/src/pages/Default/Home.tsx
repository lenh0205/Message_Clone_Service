import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <Link to="/login">Click here to go to Sign up page</Link>
            <h1 className="text-3xl text-red-700">
                Home
            </h1>
        </>
    )
}

export default Home