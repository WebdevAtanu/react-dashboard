import React from 'react';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom'

function Home() {
	const navigate=useNavigate();
	return (
		<div className="bg-gray-100 grid md:grid-cols-2">
  <div className="hero-content">
    <div className="">
      <h1 className="text-3xl font-bold">Hello there</h1>
      <p className="py-0 text-sm">Manage your expenses efficiently with us</p>
      <p className="py-6">
        Saving money is essential for financial stability and future planning. Start by setting a realistic budget that tracks your income and expenses, ensuring you live within your means. Prioritize saving by setting aside a portion of your earnings each month, ideally in a high-yield savings account. Reduce unnecessary expenses by distinguishing between needs and wants, and look for cost-effective alternatives.
      </p>
      <button className="btn btn-outline animate-pulse animate-pulse hover:animate-none" onClick={()=>navigate('/register')}>Get Started</button>
    </div>
  </div>
  <img src="bg.png" alt=""/>
</div>
	)
}

export default Home