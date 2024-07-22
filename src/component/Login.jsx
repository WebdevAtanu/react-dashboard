import React,{useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import conText from '../conText';
import { toast } from 'react-toastify';

function Login({log,children}) {

	const[data,setData]=useState(conText);
	const {value}=useContext(conText);
	const navigate=useNavigate();

	useEffect(()=>{
		
	})

	const login=(e)=>{
		e.preventDefault();
		let userMail=myform.email.value;
		let userPass=myform.password.value;
		let userData=JSON.parse(sessionStorage.getItem(userMail));
		
		if(userData==null){
			toast.error('Invalid Email');
		}
		else if(userPass!==userData.password){
			toast.error('Invalid Password');
		}
		else{
			toast.success('Login Success');
			value.setLog(true);
			navigate(`/dashboard/${userMail}`);
		}
	}

	return (
		<div id='login'>
			<form name='myform' onSubmit={login}>
			<table>
				<tbody>
					<tr>
						<td>E-mail</td>
						<td><input type="email" placeholder='billy404@gmail.com' name='email' required/></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input type="password" placeholder='Enter Password' name='password' required/></td>
					</tr>
				</tbody>
			</table>
			<button type='submit'>LOGIN</button>
			</form>
		</div>
	)
}

export default Login