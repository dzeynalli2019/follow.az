import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/colors';

const UserInfo = () => {
    return (
        <Container>
            <Input top type="text" placeholder="username" />
            <Text>Example: &nbsp; <Span>arianagrande</Span></Text>
            <Input type="text" placeholder="count" />
            <Row>
                <Text>Min: <Span>10</Span></Text>
                <Text max>Max: <Span>10 000</Span></Text>
            </Row> 
        </Container>
    )
}

export default UserInfo;

const Container = styled.div`
    
`;

const Input = styled.input`
    border-radius: 20px;
    background-color: ${COLORS.input};
    width: 100%;
    padding: 15px 25px;
    outline: none;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: ${COLORS.darkGrey};
    margin-top: ${props => props.top ? '20px' : '0'};

    ::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: ${COLORS.placeHolder};
    }

    :focus {
        border: 1px solid ${COLORS.purple};
    }
`;

const Text = styled.h6`
    font-family: 'Roboto';
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${COLORS.placeHolder};
    margin: ${props => props.max ? '10px 30px 0' : '10px 0 30px'};
`;

const Span = styled.span`
    color: ${COLORS.darkGrey};
    font-style: normal;
`;

const Row = styled.div`
    display: flex;
`;