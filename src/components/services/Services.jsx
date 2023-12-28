import { useEffect } from 'react';
import { useState } from 'react';
import AdminData from '../../store/AdminData';
import {observer} from "mobx-react";
import Store from '../../store/Store';
import AddService from '../addService/AddService';


const Services=(observer(()=> {
  // const [service,setService]=useState([]);
  // useEffect(()=>{
  //   handleService()
  // },[])
  // const handleService =()=>{
  //   Store.initService();
  //   setService(AdminData.serviceList)
  // }
  const enterNew=()=>{
    Store.addService(AdminData.services[0]);
    Store.addService(AdminData.services[1]);
  }
//  useEffect(()=>{
//   Store.getService();
//  },[])
console.log('services')
    return (
      <>
      <AddService/>
   <div>
      <h1>רשימת שירותים</h1>
      <ul>
        {AdminData.services.map(service => (
          <li key={service.id}>
             <p>firstmap</p>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>מחיר: {service.price}</p>
            <p>משך זמן: {service.duration} דקות</p>
          </li>
        ))}
      </ul>
    </div>
       <button type='button' onClick={enterNew}>enterNew</button>
      </>
    )
  }))

  export default Services
  