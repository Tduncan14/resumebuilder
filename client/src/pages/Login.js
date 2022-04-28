import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "../resources/authenication.css";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () => {




    const onFinish =  async (values) => {


        try{

             console.log(values)
          
        
            await axios.post('http://localhost:8000/api/login',values)
            message.success('login sucess')
        }

        catch(error){
             message.error('failed')
        }


    }


    return(
        <>
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