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
                        <ColorContainer>
                            <ColorfulIMG src={IMG.colorful} alt="img" />
                            <ColorText>Make your social accounts <br/> <Span>colorful</Span></ColorText>
                        </ColorContainer>
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
    ${'' /* background-color: ${COLORS.grey}; */}
`;

const ColorContainer = styled.div`
    width: 100%;
    position: relative;
`;

const ColorfulIMG = styled.img`
    height: 130px;
    width: 100%;
    margin-top: 25px;
    border-radius: 20px;
`;

const ColorText = styled.h1`
    position: absolute;
    top: 50px;
    left: 30px;
    color: ${COLORS.white};
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    line-height: 41px;
`;

const Span = styled.span`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 30px;
`;

const OrderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLORS.white};
    border-radius: 20px;
    height: 130px;
    padding: 2% 10%;
    margin-top: 25px;
    box-shadow: 0px 0px 20px rgba(105, 105, 105, 0.1);

    @media (max-width: 750px) {
        justify-content: center;
    }
`;

const StarIMG = styled.img`
    @media (max-width: 750px) {
        margin: 0 20px;
    }
`;

const NumberContainer = styled.div`
    @media (max-width: 750px) {
        margin: 0 20px;
    }
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

