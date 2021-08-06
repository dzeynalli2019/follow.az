import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import IMG from '../asset';
import COLORS from '../styles/colors';
// import Loading from './Loading';
// import NotActive from './NotActive';
import UserInfo from './UserInfo';

const Operation = () => {
    const [firstModalStatus, setFirstModalStatusStatus] = useState(false);
    const [secondModalStatus, setSecondModalStatusStatus] = useState(false);
    const [thirdModalStatus, setThirdModalStatusStatus] = useState(false);
    
    const toggleFirstModal = () => setFirstModalStatusStatus(v => !v);
    const toggleSecondModal = () => setSecondModalStatusStatus(v => !v);
    const toggleThirdModal = () => setThirdModalStatusStatus(v => !v);


    return (
        <Container>
            <Row>
                <Col lg={6} md={6} xs={12}>
                    <LeftSide>
                        <SelectorBorder>
                            <Selector>
                                <StyledRow>
                                    <Option>Instagram</Option>
                                    <IconContainer onClick={toggleFirstModal}>
                                        {(!firstModalStatus) ? <Icon src={IMG.up} alt="icon" /> : <Icon src={IMG.down} alt="icon" /> }
                                    </IconContainer>
                                </StyledRow>
                            </Selector>
                            <Selector>
                                <StyledRow>
                                    <Option>Followers</Option>
                                    <IconContainer onClick={toggleSecondModal}>
                                        {(!secondModalStatus) ? <Icon src={IMG.up} alt="icon" /> : <Icon src={IMG.down} alt="icon" /> }
                                    </IconContainer>
                                </StyledRow>
                            </Selector>
                            <Selector>
                                <StyledRow>
                                    <Option service >-- Choose service</Option>
                                    <IconContainer onClick={toggleThirdModal}>
                                        {(!thirdModalStatus) ? <Icon src={IMG.up} alt="icon" /> : <Icon src={IMG.down} alt="icon" /> }
                                    </IconContainer>
                                </StyledRow>
                                {thirdModalStatus && 
                                    <div>
                                        <OtherOptions>Max 1k (1 day delivery)</OtherOptions>
                                        <OtherOptions>Max 5k (1 day delivery)</OtherOptions>
                                        <OtherOptions>Max 15k (1 day delivery)</OtherOptions>
                                    </div>                                        
                                }
                            </Selector>                                
                        </SelectorBorder>
                        <UserInfo/>
                    </LeftSide>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <RightSide>
                        <TitleContainer>
                            <BasketIMG src={IMG.basket} alt="basket" />
                            <Title>Checkout</Title>
                        </TitleContainer>
                        <ProcessingContainer>
                            <ProcessingText>You are ordering ...</ProcessingText>
                        </ProcessingContainer>
                        <PromoInput type="text" placeholder="promo code"/>
                        <PriceContainer>
                            <PriceText>Price</PriceText>
                            <Price>0.00 AZN</Price>
                        </PriceContainer>
                        <OrderButton>order now</OrderButton>
                        <CurveLeft></CurveLeft>  
                        <CurveRight></CurveRight>                                                
                    </RightSide>
                </Col>
            </Row>
        </Container>
    )
}

export default Operation;

const LeftSide = styled.div`
    margin-top: 40px;
`;

const SelectorBorder = styled.div`
    border-bottom: 2px solid ${COLORS.input};
`;

const Selector = styled.div`
    border: 1px solid ${COLORS.input};
    border-radius: 20px;
    padding: 15px 25px 7px;
    background-color: ${COLORS.input};
    margin: 25px 0;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Option = styled.h6`
    color: ${props => props.service ? COLORS.placeHolder : COLORS.darkGrey};
    font-weight: ${props => props.service ? 400 : 600};
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

const IconContainer = styled.button`
    background-color: ${COLORS.input};
    border: none;
`;

const Icon = styled.img`
    margin-top: -10px;
`;

const OtherOptions = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${COLORS.darkGrey};
`;

const RightSide = styled.div`
    margin-top: 40px;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(105, 105, 105, 0.1);
    border-radius: 20px;
    background-color: ${COLORS.white};
    position: relative;
`;

const CurveLeft = styled.div`
    width: 15px;
    height: 40px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: ${COLORS.grey};
    position: absolute;
    bottom: 165px;
    left: 0;
`;

const CurveRight = styled.div`
    width: 15px;
    height: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: ${COLORS.grey};
    position: absolute;
    bottom: 165px;
    right: 0;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
`;

const BasketIMG = styled.img`
    height: 30px;
    margin-right: 15px;
    margin-top: -5px;
`;

const Title = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.08em;
    color: ${COLORS.purple};
`;

const ProcessingContainer = styled.div`
    padding: 60px 0;
`;

const ProcessingText = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.darkGrey};
`;

const PromoInput = styled.input`
    margin: 5px 0;
    padding: 10px 15px;
    width: 100%;
    outline: none;
    border: 1px dashed ${COLORS.placeHolder};
    background-color: ${COLORS.grey};
    box-sizing: border-box;
    border-radius: 20px;

    ::placeholder {
        text-transform: uppercase;
        color: ${COLORS.placeHolder};
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1em;
    }
`;

const PriceContainer = styled.div`
    border-top: 2px dashed ${COLORS.input};
    margin: 20px 0;
    text-align: right;
    padding-top: 15px;
`;

const PriceText = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${COLORS.placeHolder};
`;

const Price = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    color: ${COLORS.darkGrey};
`;

const OrderButton = styled.button`
    background-color: rgba(68, 100, 180, 0.3);
    border: none;
    border-radius: 20px;
    text-align: center;
    text-transform: uppercase;
    padding: 15px 0;
    margin: 10px 0;
    width: 100%;
    color: ${COLORS.white};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.1em;
`;