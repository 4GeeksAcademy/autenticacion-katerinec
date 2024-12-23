import React from "react";
import { Link } from "react-router-dom";
import {Styles} from "../../styles/home.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light navbarstyle">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-primary">Registrate</button>
					</Link>
				</div>
			</div>
		</nav>
	); 
};
