import React from 'react';
import { Table,Row,Col} from 'react-bootstrap';

const Heading = () => {
  return (
    <>
    {/* navbar */}
<Table >
      <thead>
        <tr>
          <th><img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecnI41wYlXqs4sirZMEo9lkyMqHU6E6rQjO-TyVA&s' alt='railway logo'/></th>
          <th><h2>Modern Coach Factory Raebareli</h2> 
<h5>FINAL INSPECTION REPORT</h5></th>
          <th>
          <Col >
          <Row> 
          <th> DOC NO: MCF/RBL/ QMF 2011 </th>
        </Row>
        <Row> 
          <th>REV NO: 00</th>
        </Row>
        <Row> 
          <th>DATE: 15/10/2020</th>
        </Row>
        
          </Col>
        </th>
          
        </tr>
      </thead>
    </Table>
    </>
  )
}

export default Heading