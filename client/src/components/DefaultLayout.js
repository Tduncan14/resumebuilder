
import React from 'react';
import './../resources/layout.css'
import 'antd/dist/antd.css';
import {Dropdown,Button,Menu,Space,DownOutlined} from 'antd'
import {useNavigate,Link} from 'react-router-dom';
import {UserOutlined } from '@ant-design/icons'




function DefaultLayout ({children}){

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

    // 
    const menu = (
      <Menu>
        <Menu.Item>
          <Link  to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          navigate('/login')

          

        }}>
          <a target="_blank" rel="noopener noreferrer" href="/"><span>Logout</span></a>
        </Menu.Item>
      </Menu>
    );
    


    // 

    
    return(
        <div className="layout">
            <div className="header">
                <h1  className ="homeheader" onClick = {() => navigate('/home')}>Resume Builder</h1>

      
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button icon ={<UserOutlined />}>{user.username}</Button>
      </Dropdown>
     
      
            </div>


          <div className="content">
              {children}
          </div>

        </div>
    )

}


export default DefaultLayout