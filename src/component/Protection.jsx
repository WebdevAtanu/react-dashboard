import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import conText from '../conText';

function Protection({log,children}) {
  const {value}=useContext(conText);
      if(!value.log){
        return <Navigate to='/login' replace/>
      }
      return children;
}

export default Protection
