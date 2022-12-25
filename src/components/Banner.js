import React from 'react'
import styled from 'styled-components'
import { Button } from "../styles/Button";

const Banner = () => {
    return (
        <Wrapper id="banner" className="section-m1">
            <h4>Best Discounts</h4>
            <h2 className="b-text">Upto <span className="dis"> 60% off </span> - All <span>Laptops</span> and <span>
                Mobiles </span></h2>
            <Button>Explore Offers</Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    align-items: center;
    text-align: center;
    height: 40vh;
    margin: 2rem;
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    // background: ${({ theme }) => theme.colors.bg};
    background: url(images/1.svg) no-repeat center center/cover;
    // opacity:0.5;
    text-align: center;
    border-radius: 5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 5px 0.5px;
    h4 {
        color: #89b3b0;
        font-size: 4.5rem;
    }
    
    
    h2 {
        padding: 10px 0;
        color: #9ba8a5;
        font-size: 4rem;
        // text-shadow: 2px 2px 15px rgba(60, 61, 61, 0.36);
    }
    
    
    .b-text span {
        color:#20662f;
        font-size:3.5rem;
        font-weight:900;
    }
    
    .b-text .dis {
        padding: 12px;
        color: #f72424;
        font-size: 4.5rem;
        font-weight:700;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        height: 60vh;
    }
`

export default Banner