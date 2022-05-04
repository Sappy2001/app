import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1200);
	};

	let [mode, setMode] = useState("light");
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			document.body.style.color = "white";
			document.body.style.transition = "all 0.5s ease 0s";
			showAlert("Dark Mode has been enabled", "success");
			document.title = "TextUtils - DarkMode";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			document.body.style.transition = "all 0.5s ease 0s";
			showAlert("Light Mode has been enabled", "success");
			document.title = "TextUtils - LightMode";
		}
	};
	return (
		<>
			<Router>
				<Navbar
					title="TextUtils2"
					aboutText="Jingalala"
					mode={mode}
					toggleMode={toggleMode}
          
				/>
				<Alert alert={alert} />
				<div className="container my-3">
					<Switch>
						<Route path="/about">
							<About mode={mode} toggleMode={toggleMode} />
						</Route>
						<Route path="/">
							<TextForm
								heading="enter the text to analyze below"
								mode={mode}
								showAlert={showAlert}
							/>
						</Route>
					</Switch>
				</div>
				{/* <Navbar/> */}
			</Router>
		</>
	);
}

export default App;

