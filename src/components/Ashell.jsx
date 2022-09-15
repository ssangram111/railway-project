import React from "react";
import {Table,Form,Row,Col} from 'react-bootstrap';

const Ashell = () => {


    return <>
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
    <h4 className='text-center'>A-UNDERFRAME:</h4>
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
                        <td> Distance between foot step brackets </td>
                        <td> 710mm</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>2</td>
                        <td> Welding of bio tank bkt</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
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
                        <td>3</td>
                        <td> Alignment of floor support bkt& pillar mounting channel and welding</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="2"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
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
                        <td>4</td>
                        <td> Fitment & welding of water tank bracket</td>
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
                        <td className=".Col-4">
                            <td>a. Provision of LORO pipe BKT</td> <br />
                            <td>b. Indicator BKT holes</td><br />
                            <td>c. Anti skid valve holes</td><br />
                            <td>d. Releasing device hole </td>
                        </td>
                        <td >
                            <td>4 nos.</td> <br />
                            <td>5 nos. each of dia.11</td><br />
                            <td>2 nos. each of dia. 9</td><br />
                            <td>2 nos. each of dia. 9</td>
                        </td>
                        <td > 
                            <td><Form.Control className="w-55" type="number" /> </td> <br />
                            <td><Form.Control className="w-55" type="number" /> </td> <br />
                            <td><Form.Control className="w-55" type="number" /> </td> <br />
                            <td><Form.Control className="w-55" type="number" /> </td> 
                        </td>
                        <td > 
                            <td><Form.Control className="" type="text"  /> </td> <br />
                            <td><Form.Control className="" type="text"  /> </td> <br />
                            <td><Form.Control className="" type="text"  /> </td> <br />
                            <td><Form.Control className="" type="text"  /> </td> 
                            
                        </td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td> Fitment & welding of water pump bracket</td>
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
                        <td> Fitment & welding of console </td>
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
                    <tr>
                        <td>8</td>
                        <td> Cross member rib with sole bar and member joint welding</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="6"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="6"
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
                        <td>9</td>
                        <td> Welding of pillar mounting member</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="7"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="7"
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
                        <td>10</td>
                        <td> Guide distance (longitudinal/lateral distance) </td>
                        <td> 483±1/1951±1.5</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>
                            <Row>
                                <Col>
                                    <td>Pillar mounting distance</td>
                                </Col>
                                <Col>
                                    <Row>
                                        <td>Lateral center line to pillar <br /> 
                                        center line at (PP to NPP)</td>
                                        <td>
                                        <td>Longitudinal center line to <br /> 
                                        pillar center line at (PP to NPP)</td>
                                        </td>
                                    </Row>
                                </Col>
                            </Row>

                        </td>
                        <td>
                        <Col>
                            <Row>
                                <td>7195,5362</td>
                    
                                <td>735,1031</td>
                            
                            </Row>
                        </Col>    
                        </td>
                        <td> 
                        <Col>
                            <Row>
                                <td><Form.Control className="w-55" type="text" /> </td>
                    
                                <td><Form.Control className="w-55" type="text" /> </td>
                            
                            </Row>
                        </Col>  
                            
                        </td>
                        <td> 
                        <Col>
                            <Row>
                                <td><Form.Control className="w-55" type="text" /> </td>
                    
                                <td><Form.Control className="w-55" type="text" /> </td>
                            
                            </Row>
                        </Col>  
                        </td>
                    </tr>
                    
                    <tr>
                        <td>12</td>
                        <td> Longitudinal distance between bio tank brackets</td>
                        <td> 1581</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>13</td>
                        <td> Bio tank bracket between distance outer side for U/F center line (lateral)  </td>
                        <td> 995</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>14</td>
                        <td>Bio tank bracket between distance inner side for U/F center line (lateral)</td>
                        <td> 851</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>15</td>
                        <td> Shunting bracket. </td>
                        <td> 04no.</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>  Lifting pad. </td>
                        <td> 08no.</td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>17</td>
                        <td> Twine pipe hole and BKT</td>
                        <td> 50mm/ <br />
                            Ok/Not ok</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="8"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="8"
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
                        <td>18</td>
                        <td> Both sides covering plate welding.</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="8"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="8"
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
                        <td>19</td>
                        <td> Pan head bracket welding.</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="9"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="9"
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
                        <td>20</td>
                        <td> Supporting member on trough sheet welding</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="101112"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="101112"
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
                        <td>21</td>
                        <td> Battery box bracket hole (18 Ø) distance from hole
                            center to center. <br /> (L2T,L3T)and diagonal should be equal </td>
                        <td> 315x1460(wxl) </td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                    
                    <tr>
                        <td>22</td>
                        <td> Transformer bracket hole (18 Ø,8 nos. ) distance
                            from hole center to center. <br />(2T,3T) and diagonal
                            should be equal
                        </td>
                        <td> 315x1460(wxl) </td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>
                
                    <tr>
                        <td>23</td>
                        <td> Air brake module hole (12 Ø) distance from hole 
                            center to center. <br /> and diagonal should be equal 
                        </td>
                        <td> 810x1460(bxl) </td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
                        </td>
                        <td> 
                            <Form.Control className="w-55" type="text"  /> 
                        </td>
                    </tr>

                    <tr>
                        <td>24</td>
                        <td>  Feeder junction hole(11 Ø) on head stock</td>
                        <td>Provided / <br /> Not Provided</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Provided"
                                        name="1112"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not Provided"
                                        name="1112"
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
                        <td>25</td>
                        <td>   CBC uncoupling device hole</td>
                        <td>Provided / <br /> Not Provided</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Provided"
                                        name="12"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not Provided"
                                        name="12"
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
                        <td>26</td>
                        <td>  Drain hole on trough sheet</td>
                        <td>Provided / <br /> Not Provided</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Provided"
                                        name="13"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not Provided"
                                        name="13"
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
                        <td>27</td>
                        <td>   Both side front part area wash washing drain hole</td>
                        <td>Provided / <br /> Not Provided</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Provided"
                                        name="14"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not Provided"
                                        name="14"
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
                        <td>28</td>
                        <td>Sole bar joint welding</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="15"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="15"
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
                        <td>29</td>
                        <td> Door corner joint welding and grinding</td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="16"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="16"
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
                        <td>30</td>
                        <td>  Sensor bracket location. </td>
                        <td> Ok/Not ok***</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ok"
                                        name="17"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not ok"
                                        name="17"
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
                        <td>31</td>
                        <td> Both side Fiba bkt for air spring bogie</td>
                        <td>Provided / <br /> Not Provided</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Provided"
                                        name="18"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not Provided"
                                        name="18"
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
                        <td>32</td>
                        <td> Reservoir tank bkt for air spring bogie</td>
                        <td>Provided / <br /> Not Provided</td>
                        <td>{['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Provided"
                                        name="19"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Not Provided"
                                        name="19"
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
                        <td>33</td>
                        <td> Curve roll stopper bktr</td>
                        <td> 04 nos. </td>
                        <td> 
                            <Form.Control className="w-55" type="text" /> 
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

export default Ashell;
