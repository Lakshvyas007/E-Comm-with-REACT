import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  text-transform: uppercase;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  background-color: #f1a726;
  border: 0;
  outline: none;
  color: #0a5b55;
  padding: 1.4rem 2.3rem;
  font-weight: bold;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);

  &:hover,
  &:active {
    transform: scale(0.96);
    box-shadow:0 2rem 2rem 0 rgba(0, 0, 0, 0.2);
    background-color: #0a5b55;
    cursor: pointer;
    color: #f1a726;
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
