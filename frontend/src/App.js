import './App.css';
import {useState,useEffect} from 'react';
import ShoppingForm from './components/shoppingform';
import ShoppingList from './components/shoppinglist';
import Navbar from './components/navbar';
import LoginPage from './components/loginpage';
import {Routes,Route,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
	
	const [state,setState] = useState({
		list:[],
		isLogged:false,
		token:"",
		loading:false,
		error:"",
		user:""
	})

	const appState = useSelector(state => state)



	let message =<h4> </h4>
	if(appState.login.loading) {
		message = <h4>Loading ...</h4>
	}
	if(appState.shopping.error){
		message=<h4>{appState.shopping.error}</h4>
	}
	if(appState.login.error) {
		message = <h4>{appState.login.error}</h4>
	}
	if(appState.login.isLogged) {
		return (
			<div className="App">
				<Navbar/>
				<div style={{height:25, textAlign:"center"}}>
					{message}
				</div>
				<Routes>			
					<Route path="/" element={<ShoppingList />}/>
					<Route path="/form" element={<ShoppingForm />}/>
					<Route path="*" element={<Navigate to="/"/>}/>
				</Routes>
			</div>
		);
	} else {
		return(
			<div className="App">
				<Navbar/>
				<div style={{height:25, textAlign:"center"}}>
					{message}
				</div>
				<Routes>			
					<Route path="/" element={<LoginPage />}/>
					<Route path="*" element={<Navigate to="/"/>}/>
				</Routes>
			</div>		
		)
	}
}

export default App;