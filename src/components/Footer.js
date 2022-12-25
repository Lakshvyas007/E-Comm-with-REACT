import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <div className="col">
                <figure> <img className="f-logo" src="/images/logo.png" alt="" /> </figure>
                <h4>Contact</h4>
                <p> <strong> Address:</strong> Main Market, 123 Mohalla, Kota, Rajasthan</p>
                <p> <strong> Phone:</strong> +91-9462546455, 0142-2336633</p>
                <p> <strong> Hours:</strong>10:00-20:00, Everyday</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <figure>   <img src="/images/facebook-f.svg" alt="" /> </figure>
                        <figure>  <img src="/images/instagram.svg" alt="" /> </figure>
                        <figure>   <img src="/images/twitter.svg" alt="" /> </figure>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Account</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>

            <div className="pay">
                <h4>Secured Payments Gateways</h4>
                <figure> <img src="/images/amazon-pay.svg" alt="" /> </figure>
                <figure> <img src="/images/cc-mastercard.svg" alt="" /></figure>
                <figure> <img src="/images/google-pay.svg" alt="" /></figure>
                <figure> <img src="/images/cc-visa.svg" alt="" /></figure>
                <figure> <img src="/images/apple-pay.svg" alt="" /></figure>
            </div>

            <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
              &copy;{new Date().getFullYear()}  Dharmendra Enterprises. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>

        </Wrapper>
        
    )
}

const Wrapper = styled.section`
border-top: 0.1rem solid  #0a5b55;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
background-color: ${({ theme }) => theme.colors.bg};
padding: 3rem 5rem 0.8rem 5rem;

.col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5rem;
}

.col .f-logo {
    height: 70px;
    width: 70px;
    margin-bottom: 30px;
}


h4 {
    font-size: 1.6rem;
    padding-bottom: 20px;
    letter-spacing:0.1rem;
}

 p {
    font-size: 13px;
    margin: 0 0 10px 0;
}

.icon {
    display: flex;
}

.icon img {
    height: 35px;
    width: 35px;
    margin: 0 5px;
    border-radius: 5px;
    background-color: #2a78cb7b;
    padding: 5px;
    transition: 0.3s ease;
}

.icon img:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.pay {
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.pay img {
    height: 40px;
    width: 65px;
    margin: 5px;
    border-radius: 5px;
    background-color: #0a5b5625;
    padding: 5px;
    transition: 0.3s ease;
}

.pay img:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.col a {
    text-decoration: none;
    color: black;
    font-size: 13px;
    margin-bottom: 10px;
}

.footer-bottom--section {
    padding-top: 2rem;
    width:100%;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    p {
        font-weight:600;
    }
  }

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .col, .pay{
        margin-top:2rem;
        width:100%;
        align-items: center;
    }

    .follow{
        margin-top:2rem;
    
    }
    
    h4{
        font-size: 2.6rem; 
    }
    
}


`

export default Footer;