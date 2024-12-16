import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	

	return (
		<>
		{store.token==null? < Navigate to="/login"/>:<h1>Tienes acceso a la vista privada</h1>}
		</>
	);
};
