import React,{useState,useEffect} from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {Form,Tabs,Space,Input,Button,message,Spin} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProject from '../components/ExperienceProject';
import axios from 'axios';


const {TabPane} = Tabs;

function Profile(){




  const [loading,setLoading] = useState(false)
   const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))


   useEffect(()=>{

    if(localStorage.getItem('user')){

       setUser(JSON.parse(localStorage.getItem('user')));
    }


   },[user])


   console.log(user,'this is the console.log')
  
    const onFinish = async (values) =>{

      setLoading(true)

      try{
        const response = await axios.post("http://localhost:8000/api/update",{...values,  _id: user._id});
        console.log(response.data,' this the data')
         localStorage.setItem('user',JSON.stringify(response.data))
        setLoading(false)
        message.success('profile updated')
 
      }
      catch(err)
      {
        setLoading(false);
        message.error('profile was not update')

      }


    }


    return(
    <DefaultLayout>profile
       { loading && (<Spin />)}
        <div class="update-profile">
        <h2> Update Profile </h2>
      
        <Form layout = "vertical" onFinish={ onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
    <TabPane tab="Personal Info" key="1">
     <PersonalInfo />
    </TabPane>
    <TabPane tab="Skills and Education" key="2">
       <SkillsEducation />
    </TabPane>
    <TabPane tab="Experience / Projects" key="3">
      <ExperienceProject />
    </TabPane>
  </Tabs>

  <Button htmlType="submit"> Update</Button>
  </Form>
  </div>
    </DefaultLayout>
    )
}

export default Profile