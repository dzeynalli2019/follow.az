import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import COLORS from '../styles/colors';
import IMG from '../asset';

const FAQ = () => {

    const [firstModalStatus, setFirstModalStatusStatus] = useState(false);
    const [secondModalStatus, setSecondModalStatusStatus] = useState(false);
    const [thirdModalStatus, setThirdModalStatusStatus] = useState(false);
    const [forthModalStatus, setForthModalStatusStatus] = useState(false);

    const toggleFirstModal = () => setFirstModalStatusStatus(v => !v);
    const toggleSecondModal = () => setSecondModalStatusStatus(v => !v);
    const toggleThirdModal = () => setThirdModalStatusStatus(v => !v);
    const toggleForthModal = () => setForthModalStatusStatus(v => !v);

    return (
        <BackgroundColor>
            <Container>
                <FAQContainer>
                    <Title>faq</Title>
                    <ListContainer>
                        <Row>
                            <ListTitle>Are Followers, Likes, Comments from real accounts?</ListTitle>
                            <IconContainer onClick={toggleFirstModal}>
                                {(!firstModalStatus) ? <Icon src={IMG.plus} alt="icon" /> : <Icon src={IMG.minus} alt="icon" /> }
                            </IconContainer>
                        </Row>
                        {firstModalStatus &&
                            <Text>Orders usually deliver in <b>1-3 days</b>, but often in <b>1 hour</b>. It depends on server loadness. <br/> 
                                  Save <b>Order ID</b> to track the status of your order
                            </Text>
                        }              
                    </ListContainer>
                    <ListContainer>
                        <Row>
                            <ListTitle>Can social networks block my account?</ListTitle>
                            <IconContainer onClick={toggleSecondModal}>
                                {(!secondModalStatus) ? <Icon src={IMG.plus} alt="icon" /> : <Icon src={IMG.minus} alt="icon" /> }
                            </IconContainer>
                        </Row>
                        {secondModalStatus &&
                            <Text>Orders usually deliver in <b>1-3 days</b>, but often in <b>1 hour</b>. It depends on server loadness. <br/> 
                                  Save <b>Order ID</b> to track the status of your order
                            </Text>
                        }              
                    </ListContainer>
                    <ListContainer>
                        <Row>
                            <ListTitle>How long it takes to execute my order?</ListTitle>
                            <IconContainer onClick={toggleThirdModal}>
                                {(!thirdModalStatus) ? <Icon src={IMG.plus} alt="icon" /> : <Icon src={IMG.minus} alt="icon" /> }
                            </IconContainer>
                        </Row>
                        {thirdModalStatus &&
                            <Text>Orders usually deliver in <b>1-3 days</b>, but often in <b>1 hour</b>. It depends on server loadness. <br/> 
                                  Save <b>Order ID</b> to track the status of your order
                            </Text>
                        }              
                    </ListContainer>
                    <ListContainer>
                        <Row>
                            <ListTitle>How i know that my order delivered?</ListTitle>
                            <IconContainer onClick={toggleForthModal}>
                                {(!forthModalStatus) ? <Icon src={IMG.plus} alt="icon" /> : <Icon src={IMG.minus} alt="icon" /> }
                            </IconContainer>
                        </Row>
                        {forthModalStatus &&
                            <Text>Orders usually deliver in <b>1-3 days</b>, but often in <b>1 hour</b>. It depends on server loadness. <br/> 
                                  Save <b>Order ID</b> to track the status of your order
                            </Text>
                        }              
                    </ListContainer>
                </FAQContainer>
            </Container>
        </BackgroundColor>
    )
}

export default FAQ;

const BackgroundColor = styled.div`
    background-color: ${COLORS.grey};
    padding: 2% 0 ;
`;

const FAQContainer = styled.div`
    padding: 2% 0;
`;

const Title = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 150%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${COLORS.purple};
`;

const ListContainer = styled.div`
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 20px rgba(105, 105, 105, 0.1);
    border-radius: 20px;
    padding: 2%;
    margin: 2% 0;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ListTitle = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: ${COLORS.purple};
`;

const IconContainer = styled.button`
    border: none;
    background-color: ${COLORS.white};
`;

const Icon = styled.img`
    margin-top: -8px;
`;

const Text = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 2;
    color: ${COLORS.darkGrey};
    margin-left: 10px;
`;