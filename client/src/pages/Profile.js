import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {Form,Tabs,Space,Input,Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';


const {TabPane} = Tabs;

function Profile(){



    return(
    <DefaultLayout>profile
        <div class="update-profile">
        <h2> Update Profile </h2>
        <Form layout = "vertical" onFinish={() => {}}>
          <Tabs defaultActiveKey="1">
    <TabPane tab="Personal Info" key="1">
     <PersonalInfo />
    </TabPane>
    <TabPane tab="Skills and Education" key="2">
       <SkillsEducation />
    </TabPane>
    <TabPane tab="Experience / Projects" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
  </Form>
  </div>
    </DefaultLayout>
    )
}

export default Profile