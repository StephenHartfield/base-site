import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Button, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import BasicCard from '../components/BasicCard';


const Background = styled.div`
    background-size: cover;
    background-position: center;
    min-height: 500px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    margin-bottom: 50px;
`;

const images = ['armor', 'running', 'storm'];

export default function Home(props) {

    return (
        <div>
            <Background className="background">
                <Header>Foundational Message</Header>
                <Button variant="primary">Learn more</Button>
            </Background>
            <br /><br /><br />
            <Row>
                {images.map(image => (
                    <Col md={4}>
                        <BasicCard url={image} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}