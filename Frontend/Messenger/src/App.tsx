import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Default/Home";
import Messenger from "./pages/Messenger/Messenger";
import Login from "./pages/SignIn/Login";
import SignUp from "./pages/SignIn/SignUp";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="sign-up" element={<SignUp />} />
			<Route path="messenger" element={<Messenger />} />
		</Routes>
	);
}

export default App;
