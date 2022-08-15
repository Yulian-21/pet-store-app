import React from 'react'
import { NavLink } from 'react-router-dom'
import { AboutLI, AnimatedNavLink, StyledHeader, StyledImage, StyledLI, StyledUL } from './Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src='https://static.vecteezy.com/system/resources/previews/006/470/722/original/pet-shop-logo-design-template-modern-animal-icon-label-for-store-veterinary-clinic-hospital-shelter-business-services-flat-illustration-background-with-dog-cat-and-horse-free-vector.jpg' />
      <StyledUL>
        <StyledLI>
          <AnimatedNavLink to='/pets'>Pets</AnimatedNavLink>
        </StyledLI>
        <StyledLI >
          <AnimatedNavLink to='/orders'>Orders</AnimatedNavLink>
        </StyledLI>
        <StyledLI>
          <AnimatedNavLink to='/users'>Users</AnimatedNavLink>
        </StyledLI>
        <AboutLI>
          <AnimatedNavLink to='/about'>About</AnimatedNavLink>
        </AboutLI>
      </StyledUL>
    </StyledHeader>
  )
}

export default Header