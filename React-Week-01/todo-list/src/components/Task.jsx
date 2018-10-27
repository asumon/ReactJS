import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';


class Task extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={1}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>Deadline:
                                <br/>
                                <span>{this.props.period}</span>
                            </p>
                        </div>
                    </Col>

                    <Col xs={10}>
                        <h4>{this.props.activity_title}</h4>
                        <p>{this.props.activity_description}</p>
                    </Col>

                    

                   
                 </Row>
            </div>
        );
    }
}

export default Task;