import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import IMG from '../asset';
import COLORS from '../styles/colors';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} md={6} xs={12}>
                    <Cat src={IMG.cat} alt="cat"/>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <Info>
                        <Title>404</Title>
                        <Text>Page not found</Text>
                    </Info>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;

const Container = styled.div`
    padding: 5% 0;
`;

const Cat = styled.img`

`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    
    @media (max-width: 800px) {
        margin-top: 50px;
        align-items: center;
    }
`;

const Title = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 130px;
    line-height: 152px;
    color: ${COLORS.placeHolder};
`;

const Text = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 150%;
    text-transform: uppercase;
    color: ${COLORS.placeHolder};
`;