import React, { useState, useContext } from "react";
import { useNavigate , Link} from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        let userNew = {
            email: email,
            password: password
        }
        let response = await actions.login(userNew)
       
        if (response){navigate("/")}
        else{
            alert("Error al hacer login")}
        console.log(response) 

    }

    
    return (
        <div className="container text-primary contenedor">
            
			<h1 className="text-light text-center">Iniciar Sesion</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
				</div>
                <div className="text-center">
				<button type="button" onClick={(e)=>login(e)} className="btn btn-primary m-2">Entrar</button>

                </div>
              
            </form>
		</div>
    );
}