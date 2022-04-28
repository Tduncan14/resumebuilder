import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "../resources/authenication.css";
import {Link} from 'react-router-dom'

const Login = () => {




    const onFinish = () => {


    }


    return(
        <>
        <div className="auth-parent">
        <Form layout="vertical"  onFinish={onFinish}>
                  <h1>Login</h1>
                  < hr />
                


                <Form.Item name="password">

                    
             
                
                <Form.Item name="email">
                     <Input placeholder="email" />
                </Form.Item>


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