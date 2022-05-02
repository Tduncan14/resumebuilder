import React from 'react';
import {Form,Input} from 'antd'


const {TextArea} = Input



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

                         
         
                 <div className="col-md-4">
                         <Form.Item name="Mobile Number" label="Mobile Number" rules={[{required:true}]}>
                           <Input />
                         </Form.Item>
                     </div>
                     <div className="col-md-4">
                           <Form.Item name="portfolio" label="Portfolio" rules = {[{required:true}]}>
                               <Input />
                           </Form.Item>
                         
                         </div>
                         <div className="col-md-4">
                             
                         </div>


                         <div className="col-md-12">
                         <Form.Item name="Career Objective" label="Career Objective" rules={[{required:true}]}>
                           <TextArea />
                         </Form.Item>
                     </div>
                     <div className="col-md-12">
                           <Form.Item name="Address" label="Address" rules = {[{required:true}]}>
                           <TextArea />
                           </Form.Item>
                         
                         </div>

                 </div>

                         
             </div>


    )


}


export default PersonalInfo