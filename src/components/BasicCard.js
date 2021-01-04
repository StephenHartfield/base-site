import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import armor from '../assets/armor.jpg';
import running from '../assets/running.jpg';
import storm from '../assets/storm.jpg';

export default function BasicCard(props) {

    // not a good way to do images, but quick and easy
    const image = props.url === 'storm' ? storm : props.url === 'running' ? running : armor;

    return (
        <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img style={{maxHeight: '161px', backgroundSize: 'contain'}} variant="top" src={image} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}