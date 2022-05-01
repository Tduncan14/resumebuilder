import React ,{useState,useEffect} from 'react';
import { Form, Input, Button, Select, message , Spin, Space} from 'antd';
import '../resources/authenication.css'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';



const Register = ()=> {

    const  [loading,setLoading] = useState(false)
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


    const navigate = useNavigate()


    useEffect(() =>{

        if(JSON.parse(localStorage.getItem('user'))){
            navigate('/home')
        }


    },[])

     const storeInfo = (e) =>{


       const values = setState({[e.target.name] : e.target.value})



    }



    const onFinish =  async (values) => {

      setLoading(true);



        try{


            await axios.post('http://localhost:8000/api/register', values)
            message.success('register successful')
            setLoading(false);
            navigate('/login')
            
            
        }
        catch(err){
            message.error('already a member?')
            console.log('not connecting to the backend')
            setLoading(false);
            

        }

    

    }

    return(
        <div className="auth-parent">
              {loading && (<Spin size="large" />) 
              }
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