import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <StyledSuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <MobileNavButton onClick={e => e.preventDefault()}>
            <Icon id="shopping-bag" />
          </MobileNavButton>
          <MobileNavButton onClick={e => e.preventDefault()} >
            <Icon id="search" />
          </MobileNavButton>
          <MobileNavButton  onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </MobileNavButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const StyledSuperHeader = styled(SuperHeader)`
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tablet} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }

  @media ${QUERIES.phone} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    gap: 36px;
    margin-left: auto;
  }

  @media ${QUERIES.phone} {
    gap: 18px;
  }
`;

const MobileNavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tablet} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
