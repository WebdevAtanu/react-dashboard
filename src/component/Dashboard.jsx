import React,{useState,useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Chart,defaults} from 'chart.js/auto';
import {Doughnut,Bar} from 'react-chartjs-2';

defaults.maintainAspectRatio=false;
// defaults.responsive=true;

function Dashboard() {
	const {usermail}=useParams();
	let obj=JSON.parse(sessionStorage.getItem(usermail));

	const [data,setData]=useState([])
	const ref1=useRef();
	const ref2=useRef();
	const setter=()=>{
	const save=ref1.current.value-ref2.current.value
		setData([
			{
			'label':'Earnings',
     		'value':ref1.current.value
    		},
    		{
      		'label':'Expenses',
      		'value':ref2.current.value
    		},
    		{
      		'label':'Savings',
      		'value':save
    		}
			])
	}

	return (
		<div id='dashboard'>
		<div id='left'>
			<p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  			<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
			</svg>{obj.name}</p>
				<p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
  				<path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
  				<path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
				</svg>{obj.dept}</p>
			<p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
  				<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  			<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
			</svg>{obj.email}</p>
			<p></p>
			
		</div>
		<div id='right'>
		<table>
			<tbody>
				<tr>
					<td><input type="number" ref={ref1} placeholder='Total Income'/></td>
				</tr>
				<tr>
					<td><input type="number" ref={ref2} placeholder='Total Expenses'/></td>
				</tr>
				<tr>
					<td><button onClick={setter}>GENERATE</button></td>
				</tr>
			</tbody>
		</table>
			<p>Data Representaion</p>
			<div className="div">
         <Bar data={
              {
            labels: data.map(item=>item.label),
            datasets:[
              {
                label:'amounts',
                data: data.map(item=>item.value),
                backgroundColor:[
                  '#d59b1e','#009976','#a31d41'
                  ],
                borderColor:'black'
              }
              ]
              }
           }
        />
      </div>
      <div className="div">
         <Doughnut data={
              {
            labels: data.map(item=>item.label),
            datasets:[
              {
                label:'amounts',
                data: data.map(item=>item.value),
                backgroundColor:[
                  '#d59b1e','#009976','#a31d41'
                  ],
                borderColor:'black'
              }
              ]
              }
           }
           
        />
      </div>
		</div>
			
		</div>
	)
}

export default Dashboard