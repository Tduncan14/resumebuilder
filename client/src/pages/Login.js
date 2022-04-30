import React ,{useState} from 'react';
import { Form, Input, Button, Select, message , Spin, Space} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "../resources/authenication.css";
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [loading,setLoading] = useState('');
    // to redirect
    const navigate = useNavigate()




    const onFinish =  async (values) => {
          
        setLoading(true);

        try{

             console.log(values)
          
        
           const response = await axios.post('http://localhost:8000/api/login',values)
            
           console.log( response.data)
           localStorage.setItem('user',JSON.stringify(response.data.user))
            message.success('login sucess')
            setLoading(false)
            navigate('/home')
        }

        catch(error){
             message.error('failed')
             setLoading(false)
        }


    }


    return(
        <>
        {loading && (<Spin size="large"/>)}
        <div className="auth-parent">
        <Form layout="vertical" onFinish={onFinish}>
                  <h1>Login</h1>
                  < hr />
                



                    
             
                
                <Form.Item name="email">
                     <Input placeholder="email" />
                </Form.Item>

                <Form.Item name="password">
                     <Input.Password placeholder="password" />
                </Form.Item>



                <div className="d-flex align-items-center justify-content-between">
                <Link to="/register">Click Here to Register</Link>
                <Button type="primary" htmlType="submit">Login</Button>
                </div>
            </Form>
        </div>
        
        </>
    )
}


export default Login