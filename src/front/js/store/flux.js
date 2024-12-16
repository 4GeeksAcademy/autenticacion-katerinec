const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}, login: async (useNew) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(useNew)
					})
					console.log(resp.status)
					const data = await resp.json()
					if (resp.ok) {

						console.log(data,"token")
						setStore({user:data.user,token:data.access_token})

						localStorage.setItem("access_token",data.access_token)
						return true;
					}
					setStore({user:false})
					return false
				} catch (error) {
					console.log("Error loading message from backend", error)
					setStore({user:false})
					return false;
				}
			},

			signup: async (newUser) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/signup", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(newUser)

					})
					console.log(resp.status)
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error)
					return false;
				}
			},
			private: async()=>{
				const resp = await fetch(`${process.env.BACKEND_URL}api/private`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + localStorage.getItem("access_token") 
					},
					

				})
				const data=await resp.json()
				if (resp.ok){
					setStore({user:data})
					return true
				}
				setStore({user:false})
					return false

			}
		}
	};
};

export default getState;
