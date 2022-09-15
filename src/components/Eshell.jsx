import React from 'react';
import {Table, Form,Row,Col} from 'react-bootstrap';

function Eshell() {
  return (
    <>
<Form>

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

    {/* form start here */}
    <h4 className='text-center'>E-Shell</h4>
    <Table bordered responsive>
      
      <thead>
        <tr>
          <th>S.N</th>
          <th>PARAMETER</th>
          <th>Specified value/Con.</th>
          <th>Observed value/condition</th>
          <th> Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Alignment of roof arch, carline arch, body
pillar & U/F center line</td>
         <td>Ok/Not ok***</td>
          <td>
          <Form.Check type="radio" name="group1" inline label="Ok"/>
          <Form.Check type="radio" name="group1" inline label="Not ok"/></td>
          <td>
            <Form.Control />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <Row>
              <Col sm={10}>
              <td>Width & height of main entrance door
(For plug door)</td></Col>
      <Col>
        <Row className='gap-4'>
        <td>D1</td>
        <td><hr /></td>
        <td>D2</td>
        </Row>
        </Col>
        </Row>
          </td>

          <td>
          <Col sm={12}>
               <Row className='gap-3'>
               <td bordered>1010(+3/-2)(Tejas)</td>
               <td>1870±4,2006±6</td>
               <td>1010(+3/-2) )(Tejas)</td>
               <td >1870±4,2006±6</td>
               </Row>
            </Col>
          </td>
    
          <td colSpan={2}>
            <Col >
               <Row>
               <td><Form.Control /></td>
               <td><Form.Control /></td>
               <td><Form.Control /></td>
               <td><Form.Control /></td>
               </Row>
            </Col>
          </td>
        </tr>
        <tr>
        <td>3</td>
          <td>Door straightening condition(For plug door)</td>
          <td>Ok/Not ok***</td>
          <td>
          <Form.Check type="radio" name="group2" inline label="Ok"/>
          <Form.Check type="radio" name="group2" inline label="Not ok"/>
          </td>
          
          <td>
            <Form.Control />
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>Door diagonal(For plug door)</td>
          
      
          <td>2246±1</td>
          <td><Col>
        <Row >
        <td>D1</td>
        <td><hr /></td>
        <td>D2</td>
        </Row>
        </Col></td>
          <td className="gap-1">
            <Col>
               <Row>
               <td><Form.Control /></td>
               <td><Form.Control /></td>
               </Row>
            </Col>
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>Welding &grinding of small RWG</td>
          <td>Ok/Not ok***</td>
          <td>
          <Form.Check type="radio" name="group3" inline label="Ok"/>
          <Form.Check type="radio" name="group3" inline label="Not ok"/>
          </td>
          <td>
            <Form.Control />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Door cut out back pieces</td>
          <td>Provided /Not
Provided</td>
          <td>
          <Form.Check type="radio" name="group4" inline label="Provided"/>
          <Form.Check type="radio" name="group4" inline label="Not Provided"/>
          </td>
          <td>
            <Form.Control />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Car line and roof sheet joint leakage test</td>
          <td>Done/Not done</td>
          <td>
          <Form.Check type="radio" name="group5" inline label="Done"/>
          <Form.Check type="radio" name="group5" inline label="Not Done"/>
          </td>
         
          <td>
            <Form.Control />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Welding of attachment wall holding BKT
(300,1018,1762mm</td>
<td>Done/Not done</td>
          <td>
          <Form.Check type="radio" name="group6" inline label="Done"/>
          <Form.Check type="radio" name="group6" inline label="Not Done"/>
          </td>
          <td>
            <Form.Control />
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Welding of auxiliary water tank BKT
(620mm) </td>
          <td>Done/Not done</td>
          <td> <Form.Check type="radio" name="group7" inline label="Done"/>
          <Form.Check type="radio" name="group7" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>10</td>
          <td>Welding &grinding of side wall with sole bar</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group8" inline label="Done"/>
          <Form.Check type="radio" name="group8" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>11</td>
          <td>Welding of stiffening plate(both side)</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group9" inline label="Done"/>
          <Form.Check type="radio" name="group9" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>12</td>
          <td>Dimension for AC Opening for RMPU
(Lateral/longitudinal)</td>
          <td>2140/2230(outer),
2341</td>
          <td><Form.Control /></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>13</td>
          <td>Dimension for AC Opening for RMPU
(Lateral/longitudinal)</td>
          <td>2140/2230(outer),
2341</td>
          <td><Form.Control /></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>14</td>
          <td>Lav. Mounting bracket distance</td>
          <td>835</td>
          <td><Form.Control /></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>15</td>
          <td>Carline and roof sheet welding both side</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group10" inline label="Done"/>
          <Form.Check type="radio" name="group10" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>
        
        <tr>
          <td>16</td>
          <td>Roof arch & carline sheet both side welding</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group11" inline label="Done"/>
          <Form.Check type="radio" name="group11" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>17</td>
          <td>Both side Sidewall vertical pillar & U/F
covering plate welding</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group12" inline label="Done"/>
          <Form.Check type="radio" name="group12" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>18</td>
          <td>Door cut out welding bottom side with Under
frame door profile</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group13" inline label="Done"/>
          <Form.Check type="radio" name="group13" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>19</td>
          <td>Roof element & Lav. Sidewall welding inside
& out side</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group14" inline label="Done"/>
          <Form.Check type="radio" name="group14" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>
       
        <tr>
          <td>20</td>
          <td>Lav. sidewall & sidewall both side welding
with door cut out</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group15" inline label="Done"/>
          <Form.Check type="radio" name="group15" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>21</td>
          <td>Both side end wall with Lav. Sidewall, roof
element &U/F front part welding</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group16" inline label="Done"/>
          <Form.Check type="radio" name="group16" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>
        <tr>
          <td>22</td>
          <td>Roof bkt. Fitment in stage IV </td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group17" inline label="Done"/>
          <Form.Check type="radio" name="group17" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>23</td>
          <td>
            <Row>
              <Col sm={8}>
              <td>Cross brace height</td></Col>
        <Col>
        <Row><td>LBAC</td></Row>
        </Col>
        </Row>
          </td>

          <td>
          <Col sm={12}>
               <Row className='gap-3'>
               <td>2335±6(With cannel)</td>
               <td>2366±6
(With out cannel)</td>
               </Row>
            </Col>
          </td>
    
          <td>
            <Col >
               <Row>
               <td><Form.Control /></td>
               <td><Form.Control /></td>
               </Row>
            </Col>
          </td>
        </tr>

        <tr>
          <td>24</td>
          <td>Complete shell assembly outside & inside
grinding work</td>
          <td>Done/Not done</td>
          <td><Form.Check type="radio" name="group18" inline label="Done"/>
          <Form.Check type="radio" name="group18" inline label="Not Done"/></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>25</td>
          <td>Roof element RMPU socket hole die and
alignment with end wall </td>
          <td>37mm/</td>
          <td>
          <Form.Check type="radio" name="group19" inline label="Ok"/>
          <Form.Check type="radio" name="group19" inline label="Not ok"/>
          </td>
          <td>
            <Form.Control />
          </td>
        </tr>

        <tr>
          <td>26</td>
          <td>Body width(inside)</td>
          <td>3236/ -8, +0</td>
          <td><Form.Control /></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>27</td>
          <td>Roof height from trough sheet to roof sheet </td>
          <td>2755.3±3</td>
          <td><Form.Control /></td>
          <td><Form.Control /></td>
        </tr>

        <tr>
          <td>28</td>
          <td>D.B(1230 mm) &C.N bkt</td>
          <td>Provided /Not
Provided</td>
          <td>
          <Form.Check type="radio" name="group20" inline label="Provided"/>
          <Form.Check type="radio" name="group20" inline label="Not Provided"/>
          </td>
          <td>
            <Form.Control />
          </td>
        </tr>

        <tr>
          <td>29</td>
          <td>Insulating pins</td>
          <td>Provided /Not
Provided</td>
          <td>
          <Form.Check type="radio" name="group21" inline label="Provided"/>
          <Form.Check type="radio" name="group21" inline label="Not Provided"/>
          </td>
          <td>
            <Form.Control />
          </td>
        </tr>
      </tbody>
    </Table>
    </Form>
    </>
  );
}

export default Eshell;