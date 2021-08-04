import React from 'react';
import styled from 'styled-components';
import CardInfo from '../components/CardInfo';

import Colorful from '../components/Colorful'
import FAQ from '../components/FAQ'
import NoResult from '../components/NoResult';
import NotFound from '../components/NotFound';
import Operation from '../components/Operation'

import COLORS from '../styles/colors';

const Homepage = () => {
    return (
        <Background>
            <Colorful />
            {/* <NoResult/> */}
            <Operation />
            <FAQ />
            {/* <CardInfo/> */}
            {/* <NotFound/> */}
        </Background>
    )
}

export default Homepage;

const Background = styled.div`
    background-color: ${COLORS.grey};
    padding: 0 8%;
`;
