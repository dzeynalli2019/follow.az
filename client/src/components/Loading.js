import React from 'react';
import styled from 'styled-components';
import IMG from '../asset';
import COLORS from '../styles/colors';

const Loading = () => {
    return (
        <Container>
            <Heart src={IMG.heart} alt="heart" />
            <Text>Loading...</Text>
        </Container>
    )
}

export default Loading;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;

const Heart = styled.img`

`;

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: ${COLORS.placeHolder};
`;
