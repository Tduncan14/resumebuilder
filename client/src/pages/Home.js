
import React, {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import template1 from '../pages/templates/template1.png';
import template2 from '../pages/templates/template2.png';
import DefaultLayout from '../components/DefaultLayout';
import '../resources/template.css'


const Home = () => {

   const  templates  = [
     {
       title:'Simple Resume',
       image: template1
     },

     {
       title:'Second Resume',
       image: template2
     }


   ]

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
          <div className="row home">
                {templates.map((template, i ) => {
                 return  <div className="col-md-4 ">

                    <div className="template">
                       <img src={template.image} height="400" alt=""/>

                       <div className="text">
                       <p>{template.title}</p>
                       <button onClick={() => Navigate(`/templates/${i + 1}`)}>click</button>
                      </div>

                     
                      </div>

                  
                  </div>


                }) }
          </div>
        </DefaultLayout>
        </>

    )




}

export default Home