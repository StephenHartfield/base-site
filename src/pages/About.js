import React from 'react';
import styled from 'styled-components';
import '../App.css';

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

const Paragraph = styled.p`
    padding: 15px 500px 10px 20px;
`;

export default function About(props) {

    return (
        <div>
            <Background className="background">
                <Header>About Us</Header>
            </Background>
            <br /><br />
            <Paragraph className="AboutText">
                <p>Insert text to fill up a lot, and I mean a lot, of space. All I have to do is think of what to fill it up with. 
                    I could tell a story, but that might be too much. After all, there's no need to write a novel here.
                    Also the padding is working now. It makes this paragraph thinner and to the left side of the page, as if 
                    there was an image on the right side. I also think there was supposed to be more here, but at the very least this is a good start.</p>
            </Paragraph>
            
            
        </div>
    )
}