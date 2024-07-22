import React,{useState,useEffect} from 'react';
import { toast } from 'react-toastify';


function Register() {

	const register=(e)=>{
		e.preventDefault();	
		let userName=myform.name.value;
		let userDept=myform.dept.value;
		let userMail=myform.email.value;
		let userPass=myform.password.value;
		sessionStorage.setItem(userMail,JSON.stringify({'name':userName,'dept':userDept,'email':userMail,'password':userPass}));
		myform.name.value='';
		myform.dept.value='';
		myform.email.value='';
		myform.password.value='';
		toast('Registration Complete');
	}

	return (
		<div id='register'>
		<form name='myform' onSubmit={register}>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td><input type="text" placeholder='Billy Butcher' name='name' required/></td>
					</tr>
					<tr>
						<td>Designation</td>
						<td><input type="text" placeholder='Psychopath' name='dept' required/></td>
					</tr>
					<tr>
						<td>E-mail</td>
						<td><input type="email" placeholder='billy404@gmail.com' name='email' required/></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input type="password" placeholder='Create Password' name='password' required/></td>
					</tr>
				</tbody>
			</table>
			<button type='submit'>REGISTER</button>
			</form>
		</div>
	)
}

export default Register