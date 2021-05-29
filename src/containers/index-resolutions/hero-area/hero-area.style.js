import styled from "styled-components";
import {device} from '../../../theme'

export const HeroWrapper = styled.section`
    min-height: 880px;
    display: flex;
    position: relative;
    align-items: center;
    background-attachment: scroll;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    @media ${device.xlarge}{
        min-height: 740px;
    }
    @media ${device.large}{
        min-height: 670px;
    }
    @media ${device.medium}{
        min-height: 590px;
    }
`;

export const HeroSeparator = styled.div `
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1;
    line-height: 0;
    bottom: 0;
    svg{
        fill: #F8F8F8;
        height: 100px;
        width: 100%;
    }
    i{
        color: #F8F8F8;
        height: 100px;
        width: 100%;
    }
`;

export const HeroContent = styled.div `
    text-align: center;
`;

export const HeroBtnGroup = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    @media ${device.medium}{
        margin-top: 40px;
    }
    @media ${device.small}{
        margin-top: 30px;
    }
    @media ${device.xsmall}{
        flex-direction: column;
        margin-top: 15px;
    }
`;