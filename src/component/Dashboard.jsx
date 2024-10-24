import React,{useState,useRef,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Chart,defaults} from 'chart.js/auto';
import {Doughnut,Bar} from 'react-chartjs-2';
import conText from '../conText';
import { toast } from 'react-toastify';

defaults.maintainAspectRatio=false;
// defaults.responsive=true;

function Dashboard() {
    const {usermail} = useParams();
    let obj = JSON.parse(sessionStorage.getItem(usermail));
    const [data, setData] = useState([])
    const [earn, setEarn] = useState(0);
    const [spent, setSpent] = useState(0);
    const [save, setSave] = useState(0);
    const [percent, setPercent] = useState(0);
    const {value}=useContext(conText);

    const HandleIncome = (e) => {
        setEarn(e.target.value);
    }

    const HandleSpent = (e) => {
        setSpent(e.target.value);
    }

    const logout = () => {
        value.setLog(false);
        toast.warn('You are logged out')
    }

    const setter = () => {
        if (earn < 0 || spent < 0 || spent > earn) {
            toast.warn("Something is wrong")
        } else {
            const saving = earn - spent;
            setData([{
                'label': 'Earnings',
                'value': earn
            }, {
                'label': 'Expenses',
                'value': spent
            }, {
                'label': 'Savings',
                'value': saving
            }])
            const percentage = ((earn - spent) * 100) / earn;
            setPercent(Math.round(percentage));
            setSave(saving);
        }
    }

	return (
		<>

	<div className='grid grid-cols-1 md:grid-cols-4'>
{/* ===================left navigate====================== */}
	<div className="drawer md:hidden z-50">
		<input id="my-drawer" type="checkbox" className="drawer-toggle" />
		<div className="drawer-content flex justify-end px-5">
			<label htmlFor="my-drawer" className=" drawer-button text-2xl"><i className="bi bi-list"></i></label>
		</div>
		<div className="drawer-side">
			<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
			<div className="bg-white min-h-full p-3 flex justify-between">
				<ul className="menu ">
					<li>
						<div className='flex gap-3'>
							<i className="bi bi-person-circle"></i>
							<p>{obj.name}</p>
						</div>
					</li>
					<li>
						<div className='flex gap-3'>
							<i className="bi bi-envelope-at"></i>
							<p>{obj.email}</p>
						</div>
					</li>
				</ul>
				<p onClick={logout} className='text-red-600 text-end text-2xl cursor-pointer'><i className="bi bi-box-arrow-right"></i></p>
			</div>
		</div>
	</div>

	<div className='col-span-1 bg-gray-100 hidden md:flex justify-between p-3'>
		<ul className="menu">
			<li>
				<div className='flex gap-3'>
					<i className="bi bi-person-circle"></i>
					<p>{obj.name}</p>
				</div>
			</li>
			<li>
				<div className='flex gap-3'>
					<i className="bi bi-envelope-at"></i>
					<p>{obj.email}</p>
				</div>
			</li>
		</ul>
		<p onClick={logout} className='text-red-600 text-end text-2xl cursor-pointer'><i className="bi bi-box-arrow-right"></i></p>
	</div>
{/* ===================data input====================== */}
	<div className='col-span-3 p-5 bg-gray-50'>
	<p><i className="bi bi-window-dash"></i> Dashboard</p>
	<div className="bg-sky-200 py-1 px-5 rounded text-xs my-5">
  <span><i className="bi bi-exclamation-circle"></i> Dashboard is under development</span>
</div>
		<div className="grid md:grid-cols-2 gap-5">
			<div className="flex flex-col w-full m-auto gap-3 shadow p-3 bg-white rounded border-b-4 border-b-blue-600">
				<div>
					<p className='text-sm mb-1'>How much you earned today?</p>
					<label className="input input-bordered flex items-center gap-2">
						<i className="bi bi-currency-rupee"></i>
						<input type="number" className="grow" value={earn} onChange={HandleIncome} placeholder="Today's income" />
					</label>
				</div>
				<div>
					<p className='text-sm mb-1'>How much you spent today?</p>
					<label className="input input-bordered flex items-center gap-2">
						<i className="bi bi-currency-rupee"></i>
						<input type="number" className="grow" value={spent} onChange={HandleSpent} placeholder="Today's spendings" />
					</label>
				</div>
				<div className="text-center">
					<button onClick={setter} className='bg-slate-800 hover:bg-slate-900 btn-sm text-white text-xs px-5'>GENERATE</button>
				</div>
			</div>
{/* ===================data stat====================== */}
		<div className="shadow bg-white flex flex-col items-center rounded border-b-4 border-b-orange-600">
			<div className="stats">
				<div className="stat">
					<div className="stat-title">Account balance</div>
					<div className="stat-value"><i className="bi bi-currency-rupee"></i>{earn}</div>
				</div>
				<div className="stat">
					<div className="stat-title">Total savings</div>
					<div className="stat-value"><i className="bi bi-currency-rupee"></i>{save}</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center p-3 gap-2">
			<p>Saving percentage</p>
			<div className="radial-progress" style={{ "--value": percent, "--size": "5rem", "--thickness": "1rem" }} role="progressbar">{percent}%</div>
		</div>
		</div>
	</div>

{/* ===================data represent====================== */}
	<div className="mt-5 shadow p-3 bg-white rounded border-b-4 border-b-purple-600">
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

      <div className="mt-5 shadow p-3 bg-white rounded border-b-4 border-b-green-600">
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