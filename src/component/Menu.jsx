import React,{useState,useContext} from 'react';
import {NavLink} from 'react-router-dom';
import conText from '../conText';
import { toast } from 'react-toastify';

function Menu() {
	const {value}=useContext(conText);
	return (
<div className="flex justify-between items-center mx-4 my-6">
	<img src="logo.png" alt="" className='w-[5rem]'/>
	<div>
		<ul className="menu menu-horizontal bg-base-200 rounded">
			{
			value.log?
			null
			:
			<>
			<NavLink to='/'><li>
				<div className="tooltip text-xl px-5 py-0" data-tip="Home">
					<i className="bi bi-house"></i>
				</div>
			</li></NavLink>
			<NavLink to='/register'>
				<li>
					<div className="tooltip text-xl px-5 py-0" data-tip="Register">
						<i className="bi bi-person-add"></i>
					</div>
				</li></NavLink>
				<NavLink to='/login'>
					<li>
						<div className="tooltip text-xl px-5 py-0" data-tip="Login">
							<i className="bi bi-person-circle"></i>
						</div>
					</li></NavLink>
					</>
					}
				</ul>
				
			</div>
		</div>

	)
}

export default Menu