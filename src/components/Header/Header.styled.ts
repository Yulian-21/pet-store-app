import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  margin: 0;
  margin-left: 10px;
  padding: 12px 20px;
  border-radius: 40px;
  font-family: "e-ukraine", sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: black;
  line-height: 16px;
`;

const navAnimation = keyframes`
    0% {
      background-position: 0% 50%;
    }
    25%{
        background-position: 50% 0%;
    }
    50% {
      background-position: 100% 50%;
    }
    75%{
        background-position: 50% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

export const AnimatedNavLink = styled(StyledNavlink)`
  &:hover {
    box-shadow: 10px 5px 5px black;
    transition: 0.2s ease-in-out;
    background-image: linear-gradient(
        217deg,
        rgba(255, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%);
    background-size: 200% 300%;
    animation: ${navAnimation} 15s ease-in-out infinite;
  }
`;

export const StyledUL = styled.ul`
  list-style-type: none;
  text-align: center;
  justify-content: center;
  margin-right: auto;
  display: flex;
  font-family: sans-serif;
  padding: 10px 20px;
`;

export const AboutLI = styled.li`
  margin-left: 10px;
`;

export const StyledLI = styled.li`
  margin-left: 10px;
`;

export const StyledHeader = styled.header`
  grid-area: h;
  position: static;
  background-image: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 50.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  animation: gradient 15s ease infinite;
  background-size: 150vw 150vh;
  display: flex;

  align-items: center;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: flex;
`;
