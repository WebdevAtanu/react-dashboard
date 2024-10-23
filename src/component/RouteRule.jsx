import React,{useState,useContext} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Protection from './Protection';
import Error from './Error';
import Footer from './Footer';
import conText from '../conText';

function RouteRule() {
	
	const {value}=useContext(conText);
	return (
		
		<BrowserRouter>
		<Menu logger={value.setLog}/>
		<Routes>
			<Route path='*' element={<Error/>}></Route>
			<Route path='/' element={<Home/>}></Route>
			<Route path='/register' element={<Register/>}></Route>
			<Route path='/login' element={<Login/>}></Route>
			<Route path='/dashboard/:usermail' element={<Protection log={value.log}><Dashboard/></Protection>}></Route>
		</Routes>
		<Footer/>	
		</BrowserRouter>
		
	)
}

export default RouteRule