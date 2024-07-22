import { useState } from 'react'
import './App.css';
import RouteRule from './component/RouteRule';
import conText from './conText';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[log,setLog]=useState(null);

  return (
    <>
    <conText.Provider value={{value:{log,setLog}}}>
      <RouteRule/>
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce/>
      </conText.Provider>
    </>
  )
}

export default App
