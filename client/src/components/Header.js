import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import IMG from '../asset';
import COLORS from '../styles/colors';

const Header = () => {
    return (
        <BackgroundColor>    
            <Container>
                <StyledHeader>
                    <Row>
                        <Logo src={IMG.logo} alt="logo"/>
                        <RightSide>
                            <SearchContainer>
                                <Input type="search" placeholder="Search by Order ID"/>
                                <SubmitButton><SearchIcon src={IMG.search} alt="search"/></SubmitButton>
                            </SearchContainer>
                            <LangaugeContainer>
                                <Flag src={IMG.az} alt="az"/>
                            </LangaugeContainer>
                        </RightSide>
                    </Row>
                </StyledHeader>     
            </Container>
        </BackgroundColor>
    )
}

export default Header;

const BackgroundColor = styled.div`
    background-color: ${COLORS.grey};
`;

const StyledHeader = styled.header`
    padding: 1.5% 0;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 30px;
`;

const RightSide = styled.div`
    display: flex;
    align-items: center;
    
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    background-color: ${COLORS.input};
    border: 1px solid ${COLORS.input};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 5px 15px;
    height: 30px;
    outline: none;

    ::placeholder {
        color: ${COLORS.placeHolder}
    }
`;

const SubmitButton = styled.button`
    border: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: ${COLORS.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 0 15px;
`;

const SearchIcon = styled.img`
    
`;

const LangaugeContainer = styled.div`
    background-color: ${COLORS.input};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    padding: 5px;
`;

const Flag = styled.img`

`;