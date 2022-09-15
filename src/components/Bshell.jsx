import React from 'react'
import {Table,Form,Col,Row} from 'react-bootstrap';

const Bshell = () => {
  return (
    <>
    
    <form>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>SHELL TYPE & NO.</th>
          <th>LBAC/ LBAC(Tejas)</th>
          <th>Shell assembly by</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Form.Control/></td>
          <td><Form.Control/></td>
          <td><Form.Control/></td>
          <td><Form.Control type="date"/></td>
        </tr>
       
      </tbody>
    </Table>
    <h4 className='text-center'>B-SIDE WALL</h4>
    <Table responsive bordered>
      <thead>
        <tr>
          <th className='fl-4'>S.N</th>
          <th>PARAMETER</th>
          <th>Specified value/Con.</th>
          <th>Observed value/condition</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {/* {tr1} */}
        <tr>
          <td>1</td>
          <td>Side wall laser joint (visually check)</td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>
            {/* {tr2} */}
        <tr>
          <td>2</td>
          <td>welding & grinding of Side wall sheet joint ***</td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group2"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>
        {/* {tr3} */}
        <tr>
          <td>3</td>
          <td> Condition of window profile </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group3"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group3"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>
        {/* {tr4} */}
        <tr>
          <td>4</td>
          <td> Welding of vertical & horizontal members *** </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group4"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group4"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

            {/* {tr5} */}
        <tr>
          <td>5</td>
          <td> Provision of channel for boiler </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group5"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group5"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

            {/* {tr6} */}
            <tr>
          <td>6</td>
          <td> Dents in side wall </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group6"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group6"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

          {/* {tr7} */}
          <tr>
          <td>7</td>
          <td> Condition of RWG </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group7"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group7"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

        {/* {tr8} */}
        <tr>
          <td>8</td>
          <td> Side wall and Lav. side wall with member spots welding </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group8"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group8"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

        {/* {tr9} */}
        <tr>
          <td>9</td>
          <td> Roof flange joint leveling and welding </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group9"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group9"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

        {/* {tr10} */}
        <tr>
          <td>10</td>
          <td>  Conduit hole on roof flange  </td>
          <td>provided/Not provided</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Provided"
            name="group10"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not Provided"
            name="group10"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

        {/* {tr11} */}
        <tr>
          <td>11</td>
          <td>   Car line joint welding and leakage test  </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group11"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group11"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

         {/* {tr12} */}
         <tr>
          <td>12</td>
          <td> Pull box distance from center line | LBAC  </td>
          <td><Col>
        <Row >
        <td> 348,7324(PP side)</td>
        <td><hr /></td>
        <td>4547,3560(NPP side)</td>
        </Row>
        </Col></td>
      <td>
            <Form.Control className="w-52" type="text" />&nbsp;
            <Form.Control className="w-52" type="text" />
        </td>
        <td>
            <Form.Control className="w-52" type="text" />&nbsp;
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

         {/* {tr13} */}
         <tr>
          <td>13</td>
          <td>  Window seal joint elevation and leakage test  </td>
          <td>Ok/Not ok***</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group13"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group13"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
    </tr>

    {/* {tr14} */}
    <tr>
          <td>14</td>
          <td>   Power panel indictor hole at Lav. side wall(PP side)  </td>
          <td>Provided/Not provided</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ok"
            name="group14"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not ok"
            name="group14"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
    </tr>

    {/* {tr15} */}
    <tr>
          <td>15</td>
          <td>    Distance from under frame to channel for water boiler  </td>
          <td>1219.5,575</td>
          <td>
            <Form.Control className="w-52" type="text" />
        </td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
    </tr>

    {/* {tr16} */}
    <tr>
          <td>16</td>
          <td> Distance from center line to channel for water boiler  </td>
          <td><Col>
        <Row >
        <td> 595,850</td>
        <td><hr /></td>
        <td>985,850,125</td>
        </Row>
        </Col></td>
      <td>
            <Form.Control className="w-52" type="text" />&nbsp;
            <Form.Control className="w-52" type="text" />
        </td>
        <td>
            <Form.Control className="w-52" type="text" />&nbsp;
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

        
    {/* {tr17} */}
    <tr>
          <td>17</td>
          <td>Car line with side wall joint brazing</td>
          <td>Done /Not done</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Done"
            name="group17"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not done"
            name="group17"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
    </tr>

     {/* {tr18} */}
     <tr>
          <td>18</td>
          <td>Side wall channel for Wider window</td>
          <td>provided/Not provided</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Provided"
            name="group18"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not Provided"
            name="group18"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

         {/* {tr19} */}
    <tr>
          <td>19</td>
          <td> Side wall member joint grinding work</td>
          <td>Done /Not done</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Done"
            name="group19"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not done"
            name="group19"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}</td>
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
    </tr>
      </tbody>
    </Table>
    </form>
     
    
     
    <br/>
    
    </>
  )
}

export default Bshell;