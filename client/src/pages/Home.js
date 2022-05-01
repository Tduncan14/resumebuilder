
import React, {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';



const Home = () => {

   const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

    
   const  Navigate = useNavigate()
   
   
   useEffect(()=>{

    if(!user){
      localStorage.removeItem('user');
      setUser(null);
     return Navigate('/login')
    }



   },[user])


    return(
        <>

        <DefaultLayout>
          <h1>Hello</h1>
        </DefaultLayout>
        </>

    )




}

export default Home