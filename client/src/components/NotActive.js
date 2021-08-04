import React from 'react';
import styled from 'styled-components';

import COLORS from '../styles/colors';

const NotActive = () => {
    return (
        <Container>
            <Text>This service is <b>not active</b>. <br/> Please, choose another</Text>
        </Container>
    )
}

export default NotActive;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: ${COLORS.darkGrey};
`;
