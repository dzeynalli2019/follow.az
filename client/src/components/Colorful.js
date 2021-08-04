import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import IMG from '../asset';
import COLORS from '../styles/colors';

const Colorful = () => {
    return (
        <BackgroundColor>
            <Container>
                <Row>
                    <Col lg={9} md={8} xs={12}>
                        <ColorfulIMG src={IMG.colorful} alt="colorful" />
                    </Col>
                    <Col lg={3} md={4} xs={12}>
                        <OrderContainer>
                            <StarIMG src={IMG.star} alt="star" />
                            <NumberContainer>
                                <Number>3450</Number>
                                <Text>Total orders</Text>
                            </NumberContainer>
                        </OrderContainer>
                    </Col>
                </Row>
            </Container>
        </BackgroundColor>
    )
}

export default Colorful;

const BackgroundColor = styled.div`
    background-color: ${COLORS.grey};
`;

const ColorfulIMG = styled.img`
    height: 150px;
    width: 100%;
    margin-left: -20px;
`;

const OrderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLORS.white};
    border-radius: 20px;
    height: 100px;
    padding: 2% 10%;
    margin-top: 15px;
    box-shadow: 0px 0px 20px rgba(105, 105, 105, 0.1);
`;

const StarIMG = styled.img`

`;

const NumberContainer = styled.div`

`;

const Number = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 35px;
    line-height: 41px;
    color: ${COLORS.darkGrey};
`;

const Text = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${COLORS.placeHolder};
`;

