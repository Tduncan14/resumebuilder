import React from 'react';
import {Form,Input} from 'antd'



const PersonalInfo = () => {





    return (
             <div>
                 <div className="row">
                     <div className="col-md-4">
                         <Form.Item name="First Name" label="First Name" rules={[{required:true}]}>
                           <Input />
                         </Form.Item>
                     </div>
                     <div className="col-md-4">
                           <Form.Item name="Last Name" label="Last Name" rules = {[{required:true}]}>
                               <Input />
                           </Form.Item>
                         
                         </div>
                         <div className="col-md-4">
                             <Form.Item name="Email"  label="Email" rules={[{required:true}]}>
                                 <Input />
                             </Form.Item>
                         
                         </div>
                 </div>
             </div>


    )


}


export default PersonalInfo