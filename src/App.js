import logo from './logo.svg';
import './App.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Input,Space,Button,Card, message, Result } from 'antd';
import React, { useState } from 'react';
import Password from 'antd/lib/input/Password';


  function App() {
    let [userName,setUserName] = useState();
    let [userPass,setUserPass] = useState();

    let handleLogin = () => {
      console.log(userName)
      console.log(userPass)

      if(!userName){
         message.warning("invild User");
      }
      if(!userPass){
        message.warning("invild Pass");
     }
 let url = "http://localhost:8080/user/login?phone=123&email=" + userName + "&password=" + userPass; 
   fetch(url, {
   method: 'POST',
   mode:'no-cors'
}).then(result => console.log("Server resp"+ result));
  


    }

    return(
  <div className="site-card-border-less-wrapper">
    <Card title="Login">
    <Space direction="vertical">
      <Input size="default size" 
      placeholder="User name" 
      prefix={<UserOutlined />}
      value = {userName}
      onChange= {
        
        (e)=>{console.log(e.target.value)
          setUserName(e.target.value)}
        }
       />
      
    <Input.Password 
    prefix = {<LockOutlined />}
      placeholder="Password"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      value = {userPass}
      onChange= {
        
        (e)=>{console.log(e.target.value)
          setUserPass(e.target.value)}
        }
    />
    <Button type="primary"onClick={handleLogin}>Login</Button>
  </Space>
    </Card>
  </div>
);}
export default App;