import React,{useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import conText from '../conText';
import { toast } from 'react-toastify';

function Login({log,children}) {

	const[data,setData]=useState(conText);
	const {value}=useContext(conText);
	const navigate=useNavigate();

	const login=(e)=>{
		e.preventDefault();
		let userMail=myform.email.value;
		let userPass=myform.password.value;
		let userData=JSON.parse(sessionStorage.getItem(userMail));
		
		if(userData==null){
			toast.error('Invalid Email/Password');
		}
		else if(userPass!==userData.password){
			toast.error('Invalid Email/Password');
		}
		else{
			toast.success('Welcome');
			value.setLog(true);
			navigate(`/dashboard/${userMail}`);
		}
	}

	return (

<div className='bg-gray-100 p-5 flex justify-center'>
	<form name='myform' onSubmit={login} className='w-full md:w-1/2 border border-black py-12 px-6 rounded-xl flex flex-col gap-5 bg-white'>

			<label className="input input-bordered flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-4 w-4 opacity-70">
					<path
						d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
						<path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input type="text" className="grow" placeholder="Email" name='email' required/>
					</label>
					<label className="input input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70">
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd" />
							</svg>
							<input type="password" className="grow" placeholder='password' name='password' required/>
						</label>
						<button type='submit' className='btn btn-outline'>Login</button>
					</form>
				</div>


















		// <div id='login'>
		// 	<form name='myform' onSubmit={login}>
		// 	<table>
		// 		<tbody>
		// 			<tr>
		// 				<td>E-mail</td>
		// 				<td><input type="email" placeholder='billy404@gmail.com' name='email' required/></td>
		// 			</tr>
		// 			<tr>
		// 				<td>Password</td>
		// 				<td><input type="password" placeholder='Enter Password' name='password' required/></td>
		// 			</tr>
		// 		</tbody>
		// 	</table>
		// 	<button type='submit'>LOGIN</button>
		// 	</form>
		// </div>
	)
}

export default Login