import React from 'react';
import styled from 'styled-components';
import IMG from '../asset';
import COLORS from '../styles/colors';

const NoResult = () => {
    return (
        <Container>
            <Astronot src={IMG.astronot} alt="img"/>
            <Text no>No results for <b>41235</b> Order ID</Text>
            <Text>If you think this is mistake, please contact us</Text>
        </Container>
    )
}

export default NoResult;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;

const Astronot = styled.img`
    margin: 10px 0;
`;

const Text = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.no ? '20px' : '16px'};
    line-height: ${props => props.no ? '23px' : '19px'};
    margin: 10px 0;
    color: ${props => props.no ? COLORS.darkGrey : COLORS.placeHolder};
`;
