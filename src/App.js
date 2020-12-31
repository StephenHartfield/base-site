import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const AppStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 30px;
`;
// Chicken
export default function App(props) {

    return (
        <div>
            <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgray' }}></div>
            <Row>
                <Col md={1}></Col>
                <Col md={5}>
                    <div style={{width: '90%', height: '300px', backgroundColor: 'lightblue', margin: '0 auto'}}></div>
                </Col>
                <Col md={4}>
                    <div style={{width: '90%', height: '300px', backgroundColor: 'red', margin: '0 auto'}}></div>
                </Col>
            </Row>
        </div>  
    )
}