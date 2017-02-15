import React, { Component } from 'react';
import { Tabs } from 'antd';

import Hello from './components/Hello';
import Timer from './components/Timer';
import Age from './components/Age';
import Salary from './components/Salary';
import House from './components/House';
import Bmi from './components/Bmi';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Profile extends Component {
  render() {
    return (
      <div>
        <Hello text="Grace_ji"/>
        <Timer />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Age" key="1">
            <Age />
          </TabPane>
          <TabPane tab="Salary" key="2">
            <Salary />
          </TabPane>
          <TabPane tab="House" key="3">
            <House />
          </TabPane>
          <TabPane tab="BMI" key="4">
            <Bmi />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Profile;