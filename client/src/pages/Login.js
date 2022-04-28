import React from 'react';
import { Form, Input, Button, Select } from 'antd';
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
                     <Input placeholder="password" />
                </Form.Item>


             
                
                <Form.Item name="email">
                     <Input placeholder="email" />
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