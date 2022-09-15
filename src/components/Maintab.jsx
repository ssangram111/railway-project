import React from 'react';
import {Tab,Tabs} from 'react-bootstrap';
import Ashell from './Ashell';
import Bshell from './Bshell';
import Cshell from './Cshell';
import Dshell from './Dshell';
import Eshell from './Eshell';




const  MainTab = () => {
  
  return (
<>
    <Tabs
      defaultActiveKey="Ashell"
      id="controlled-tab-example"
      className="mb-3"
      justify
      mt-9
    >
      <Tab eventKey="Ashell" title="A-UNDERFRAME">
      <Ashell/>
      </Tab>
      <Tab eventKey="B-SIDEWALL" title="B-SIDEWALL">
      <Bshell/>
      </Tab>
      <Tab eventKey="Cshell" title="C-ENDWALL">
        <Cshell/>
      </Tab>
      <Tab eventKey="Dshell" title="D-ROOF">
        <Dshell/>
      </Tab>
      <Tab eventKey="Eshell" title="E-SHELL">
        <Eshell/>
      </Tab>
     
     </Tabs>
    </>
  );
}

export default MainTab;