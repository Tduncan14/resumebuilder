import React ,{useState} from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import '../resources/authenication.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';



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



    const onFinish =  async (values) => {

        console.log(values)



        try{
            await axios.post('http://localhost:8000/api/register', values)
            
        }
        catch(err){
            console.log('not connecting to the backend')

            

        }

    

    }

    return(
        <div className="auth-parent">
            <Form layout="vertical"  onFinish={onFinish}>
                  <h1>Register</h1>
                  < hr />
                <Form.Item name="username">
                     <Input placeholder="username"  />
                </Form.Item>

                <Form.Item name="password">
                     <Input.Password placeholder="password" />
                </Form.Item>


                <Form.Item name="confirm password">
                     <Input.Password placeholder=" confirm password" />
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