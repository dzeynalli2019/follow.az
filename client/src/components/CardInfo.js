import React from 'react';
import styled from 'styled-components';
import IMG from '../asset';
import COLORS from '../styles/colors';

const CardInfo = () => {
    return (
        <Container>
            <InfoContainer>
                <TitleContainer>
                    <Icon src={IMG.purchase} alt="icon" />
                    <Title>Purchase</Title>
                </TitleContainer>
                <Text for="ccn">Card number</Text>
                <Input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="16" placeholder="xxxx xxxx xxxx xxxx"/>
                <Row>
                    <InputContainer>
                        <Text>Expire date</Text>
                        <Input type="text"  placeholder="MM/YY" />
                    </InputContainer>
                    <InputContainer left>
                        <Text>CVC</Text>
                        <Input type="password"  placeholder="123" />
                    </InputContainer>
                </Row>
                <Button>pay 13.00 azn</Button>
            </InfoContainer>
            <SponsorRow>
                <SponsorIMG src={IMG.atb} alt="img"/>
                <SponsorIMG src={IMG.visa} alt="img"/>
                <SponsorIMG src={IMG.master} alt="img"/>
            </SponsorRow>
        </Container>
    )
}

export default CardInfo;

const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InfoContainer = styled.div`
    box-shadow: 0px 0px 20px rgba(105, 105, 105, 0.1);
    border-radius: 20px;
    background-color: ${COLORS.white};
    padding: 3% 5%;
    width: 50%;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    margin-bottom: 7px;
`;

const Icon = styled.img`
    height: 25px;
`;

const Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.08em;
    color: ${COLORS.purple};
    margin-left: 15px;
`;

const Text = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-top: 8px;
    color: ${COLORS.darkGrey};
`;

const Input = styled.input`
    width: 100%;
    border-radius: 20px;
    background-color: ${COLORS.input};
    border: none;
    padding: 10px 20px;
    outline: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.1em;
    color: ${COLORS.darkGrey};

    ::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: ${COLORS.placeHolder};
    }
`;

const Row = styled.div`
    display: flex;
    margin-top: 15px;
`;

const InputContainer = styled.div`
    margin: ${props => props.left ? '0 0 0 10px' : '0 10px 0 0'};
    width: 100%;
`;

const Button = styled.button`
    background-color: ${COLORS.purple};
    border: none;
    border-radius: 20px;
    padding: 10px 0;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLORS.white};
    margin-top: 30px;
`;

const SponsorRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 20px;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const SponsorIMG = styled.img`
    margin: 20px;
`;

