import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import IMG from '../asset';
import COLORS from '../styles/colors';

const Footer = () => {
    return (
        <BackgroundColor>         
            <Container>
                <StyledFooter>
                    <Row>
                        <LeftSide>
                            <LinksContainer>
                                <CopyText><Span>Follow.az</Span> © 2020-2021 | <MailLink href="mailto:info@follow.az">info@follow.az</MailLink></CopyText>
                                <Links>
                                    <SocialLink href="#"><SocialIcon src={IMG.facebook} alt="social" /></SocialLink>
                                    <SocialLink href="#"><SocialIcon src={IMG.instagram} alt="social" /></SocialLink>
                                    <SocialLink href="#"><SocialIcon src={IMG.whatsapp} alt="social" /></SocialLink>
                                </Links>
                            </LinksContainer>
                            <CardIMG src={IMG.cards} alt="cards" />
                        </LeftSide>
                        <RightSide>
                            <Text>Made with &nbsp; </Text>
                            <MadeIMG src={IMG.love} alt="made"/>
                            <Text>&nbsp; by &nbsp;</Text>
                            <MadeIMG src={IMG.ideas} alt="made" />
                            <MadeIMG src={IMG.foundation} alt="made" />
                        </RightSide>
                    </Row>
                </StyledFooter>
            </Container>
        </BackgroundColor>
    )
}

export default Footer;

const BackgroundColor = styled.div`
    background-color: ${COLORS.grey};
    ${'' /* position: fixed;
    bottom: 0;
    width: 100%; */}
`;

const StyledFooter = styled.footer`
    padding: 10px 0;
    border-top: 2px solid ${COLORS.input};
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

const LinksContainer = styled.div`

`;

const CopyText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${COLORS.placeHolder}
`;

const Span = styled.span`
    color: ${COLORS.purple};
`;

const MailLink = styled.a`
    color: ${COLORS.placeHolder};
    text-decoration: none;

    :hover {
        color: ${COLORS.placeHolder};
        text-decoration: none;
    }
`;

const Links = styled.div`
    margin-top: -7px;
`;

const SocialLink = styled.a`
    margin-right: 10px;
`;

const SocialIcon = styled.img`

`;

const CardIMG = styled.img`
    height: 20px;
    margin-left: 25px;
`;

const RightSide = styled.div`
    display: flex;
    padding-top: 10px;

    @media (max-width: 800px) {
        justify-content: center;
    }
`;

const Text = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    color: ${COLORS.placeHolder};
`;

const MadeIMG = styled.img`
    height: 15px;
`;