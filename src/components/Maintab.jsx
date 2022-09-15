import React from 'react';
import {Tab,Tabs} from 'react-bootstrap';
import Ashell from './Ashell';
import Bshell from './Bshell';
import Cshell from './Cshell';
import Dshell from './Dshell';
import Eshell from './Eshell';




const  MainTab = ({title,index}) => {
  console.log(index)
  return (
<>
    <Tabs
      defaultActiveKey="expenses"
      id="controlled-tab-example"
      className="mb-3"
      justify
      mt-9
    >
      <Tab eventKey="Ashell" title="A-Shell">
      <Ashell/>
      </Tab>
      <Tab eventKey="Bshell" title="B-shell">
      <Bshell/>
      </Tab>
      <Tab eventKey="Cshell" title="C-shell">
        <Cshell/>
      </Tab>
      <Tab eventKey="Dshell" title="D-shell">
        <Dshell/>
      </Tab>
      <Tab eventKey="Eshell" title="E-shell">
        <Eshell/>
      </Tab>
     
     </Tabs>
    </>
  );
}

export default MainTab;