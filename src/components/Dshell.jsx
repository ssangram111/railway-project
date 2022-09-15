import React from "react";
import {Table,Form} from 'react-bootstrap';

const Dshell = () => {


    return <>
        <Form>
        <Table striped bordered hover>
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
    <h4 className='text-center'>D-Shell</h4>

            <Table responsive bordered>
                <thead >
                    <tr className="p-20">
                        <th>S.N</th>
                        <th>PARAMETER</th>
                        <th>Specified value/ <br />
                            Con.</th>
                        <th>Observed value/ <br />
                            condition</th>
                        <th>REMARKS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Roof unwanted holes</td>
                        <td> Observed/not observed</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Observed"
                                        name="1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not observed"
                                        name="1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>2</td>
                        <td> Alignment of floor support bkt& pillar mounting channel and welding   ***</td>
                        <td>Done/ Not done</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Done"
                                        name="2"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not done"
                                        name="2"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>3</td>
                        <td> Condition of roof arch</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="3"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="3"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> Welding of cross brace joint    ***</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="3"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="3"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>5</td>
                        <td> Cross brace height(roof center to top ) </td>
                        <td> 301</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>6</td>
                        <td> Final roof end condition</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="4"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="4"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>  Cross brace supporting bracket distance</td>
                        <td> 1500</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td> Ventilator grill arrangement joint welding </td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="5"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="5"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
  
                </tbody>
            </Table>
        </Form>
        
    </>
};

export default Dshell;
