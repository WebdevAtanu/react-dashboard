import React,{useState,useRef,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Chart,defaults} from 'chart.js/auto';
import {Doughnut,Bar} from 'react-chartjs-2';
import conText from '../conText';

defaults.maintainAspectRatio=false;
// defaults.responsive=true;

function Dashboard() {
    const {usermail} = useParams();
    let obj = JSON.parse(sessionStorage.getItem(usermail));
    const [data, setData] = useState([])
    const [earn, setEarn] = useState(0);
    const [save, setSave] = useState(10);
    const {value}=useContext(conText);

    const HandleSlide = (e) => {
        setSave(e.target.value);
    }

    const HandleIncome = (e) => {
        setEarn(e.target.value);
    }

    const logout = () => {
        value.setLog(false);
        toast.warn('You are logged out')
    }

    const setter = () => {
        const saving = (earn * save) / 100
        setData([{
            'label': 'Earnings',
            'value': earn
        }, {
            'label': 'Expenses',
            'value': earn - ((earn * save) / 100)
        }, {
            'label': 'Savings',
            'value': saving
        }])
    }

	return (
		<>
		{/* temp */}
	<div role="alert" className="px-5 flex gap-5 items-center p-1 shadow mb-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			className="stroke-info h-6 w-6 shrink-0">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
		</svg>
		<div>
			<div className="text-xs">dashboard is under development</div>
		</div>
	</div>

	<div className='grid grid-cols-1 md:grid-cols-4'>

	{/* ===================left navigate====================== */}
		<div className='col-span-1 bg-gray-100 flex flex-col justify-between'>
			<ul className="menu">
				<li>
					<div className='flex gap-5'>
						<i className="bi bi-person-circle"></i>
						<p>{obj.name}</p>
					</div>
				</li>
				<li>
					<div className='flex gap-5'>
						<i className="bi bi-envelope-at"></i>
						<p>{obj.email}</p>
					</div>
				</li>
				<li onClick={logout} className='text-red-600'>
						<p><i className="bi bi-box-arrow-right"></i>Logout</p>
				</li>
			</ul>
		</div>


{/* ===================data input====================== */}
	<div className='col-span-3 p-5'>
		<div className="flex flex-col w-full md:w-1/2 m-auto gap-3">
			<div>
				<p className='text-sm mb-1'>How much you earned today?</p>
				<label className="input input-bordered flex items-center gap-2">
					<i className="bi bi-currency-rupee"></i>
					<input type="number" className="grow" onChange={HandleIncome} placeholder="Today's income" />
				</label>
			</div>
			<div>
				<p className='text-sm mb-1'>How much you saved today?</p>
				<label className="input input-bordered flex items-center gap-2">
					<input type="range" min='0' max="100" value={save} className="range range-xs" onChange={HandleSlide}/>
					{save}%
				</label>
			</div>
			<div className="text-center">
			<button onClick={setter} className='bg-slate-900 btn btn-sm text-white px-5'>GENERATE</button>
			</div>
		</div>

{/* ===================data represent====================== */}
			<hr className='my-5'/>
			<div className="">
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
      <div className="mt-5">
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
		</>
	)
}

export default Dashboard