import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Default/Home";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import SignUp from "./pages/SignUp/SignUp";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="messenger" element={<Messenger />} />
			<Route path="sign-up" element={<SignUp />} />
		</Routes>
	);
}

export default App;
