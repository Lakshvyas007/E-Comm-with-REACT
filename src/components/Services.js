import React from 'react';
import styled from 'styled-components';

const Services = () => {
    return (
        <>
            <Wrap>
                <Header>
                    SERVICES
                </Header>
            </Wrap>
            <Wrapper id="services" className="section-p1">
                <div className="s-box">
                    <figure>
                        <img src="images/shipping.jpg" alt="" />
                    </figure>
                    <h6>Free Shipping</h6>
                </div>
                <div className="s-box">
                    <figure>
                        <img src="images/order.jpg" alt="" />
                    </figure>
                    <h6>Online Order</h6>
                </div>
                <div className="s-box">
                    <figure>
                        <img src="images/money.jpg" alt="" />
                    </figure>
                    <h6>Save Money</h6>
                </div>
                <div className='s-box'>
                    <figure>
                        <img src="images/custom.jpg" alt="" />
                    </figure>
                    <h6>Custom Order</h6>
                </div>
                <div className="s-box">
                    <figure>
                        <img src="images/support.jpg" alt="" />
                    </figure>
                    <h6>24/7 Support</h6>
                </div>
                <div className='s-box'>
                    <figure>
                        <img src="images/custom.jpg" alt="" />
                    </figure>
                    <h6>Custom Order</h6>
                </div>
            </Wrapper>
        </>
    )
}

const Wrap = styled.div`
display:flex;
justify-content: center;
margin: 3rem 0 2rem 0;
align-items: center;`

const Header = styled.h2`
padding: 15px 50px;
display:inline-block;
line-height: 1;
color: #088178;
background-color:#fddde4;
background-color: ${({ theme }) => theme.colors.bg};
cursor: pointer;
text-align:center;
font-size:3.5rem;
font-weight:700;
border-radius:15px;
`

const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 2rem;
    .s-box img {
        height: 300px;
        width: 100%;
        margin-bottom: 10px;
    }
    .section-p1 {
        padding: 40px 80px;
    }
    .s-box {
        width: 390px;
        height: 400px;
        text-align: center;
        padding: 25px 15px;
        box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.06);
        border: 1px solid #cce7d0;
        border-radius: 1.5rem;
        margin: 15px 35px;
    }
    .s-box:hover {
        border: 1px solid #deece1c6;
        box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
        cursor:pointer;
    
    }
    
 .s-box h6 {
        display: inline-block;
        padding: 1rem 2rem;
        line-height: 1;
        border-radius: 4px;
        color: #088178;
        background-color: #fddde4;
        cursor: pointer;
        font-size: 1.5rem;
    }

 .s-box:nth-child(2) h6 {
        background-color: #c8b9df;
    }
    
 .s-box:nth-child(3) h6 {
        background-color: #ead6a4;
    }
    
 .s-box:nth-child(4) h6 {
        background-color: #acbce5;
    }
    
 .s-box:nth-child(5) h6 {
        background-color: #f1c7b6;
    }
    
    
`

export default Services