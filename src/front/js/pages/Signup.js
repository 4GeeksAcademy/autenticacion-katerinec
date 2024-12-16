import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [name,setName]=useState("")
	const [email,setEmail]=useState("")
	const[password,setPassword]=useState("")

	const add = async (e)=>{
     e.preventDefault()
	 let newUser = {
		name : name,
		email : email,
		password : password

	}
	let resp = await actions.signup(newUser)
	console.log(resp)
	}
	return (
		<div className="container text-primary">
			<h1>Signup</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Name</label>
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
				</div>
				<button type="button" onClick={(e)=>add(e)} className="btn btn-primary m-2">Submit</button>
				
			</form>
		</div>
	);
};
