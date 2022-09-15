import React from 'react'
import {Table,Form} from 'react-bootstrap';

const Cshell = () => {
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
    <h4 className='text-center'>C-END WALL</h4>
    <Table responsive bordered>
      <thead>
        <tr>
          <th>S.N</th>
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
          <td>Leveling of both side end wall vestibule plate</td>
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
          <td>EFT cover & lock</td>
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
          <td> Condition of tail lamp BKT. </td>
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
          <td> Dents in end wall </td>
          <td>Observed/Not observed</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Observed"
            name="group4"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not observed"
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
          <td> Welding &grinding of End wall joint </td>
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
          <td> End wall back pieces for sliding door  </td>
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
          <td>  End wall RMPU reject hole </td>
          <td>(105x55)(LXW)</td>
          <td>
            <Form.Control className="w-52" type="text" />
        </td> 
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>

        {/* {tr8} */}
        <tr>
          <td>8</td>
          <td> End wall exhaust cutting (in AC shell) </td>
          <td>Provided/Not provided</td>
          <td>{['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Provided"
            name="group8"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Not provided"
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
          <td> End wall unwanted hole </td>
          <td>Observed/Not observed</td>
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
          <td>Distance between U channel</td>
          <td>1148±4mm</td>
          <td>
            <Form.Control className="w-52" type="text" />
        </td>  
        <td>
            <Form.Control className="w-52" type="text" />
        </td>
        </tr>
      </tbody>
    </Table>
    </form>
    </>
  )
}

export default Cshell;