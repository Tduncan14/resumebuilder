import React ,{useState} from 'react';
import { Form, Input, Button, Select } from 'antd';
import '../resources/authenication.css'
import { Link } from 'react-router-dom';



const Register = ()=> {

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [confirmpassword,setConfirmpassord] = useState('')
    const [state,setState] = useState({
        name,
        password,
        email,
        confirmpassword,
    })



     const storeInfo = (e) =>{


       const values = setState({[e.target.name] : e.target.value})



    }



    const onFinish = (values) => {


        console.log(values)

    }

    return(
        <div className="auth-parent">
            <Form layout="vertical"  onFinish={onFinish}>
                  <h1>Register</h1>
                  < hr />
                <Form.Item name="username">
                     <Input placeholder="username" />
                </Form.Item>

                <Form.Item name="password">
                     <Input placeholder="password" />
                </Form.Item>


                <Form.Item name="confirm password">
                     <Input placeholder=" confirm password" />
                </Form.Item>


                
                <Form.Item name="email">
                     <Input placeholder="email" />
                </Form.Item>

               
                <div className="d-flex align-items-center justify-content-between">
                <Link to="/login">Click Here to Login</Link>
                <Button type="primary" htmlType="submit">Register</Button>
                </div>
            </Form>
        </div>
    )
}


export default Register