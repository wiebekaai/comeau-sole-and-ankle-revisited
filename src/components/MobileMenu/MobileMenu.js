/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  margin-top: auto;
  margin-bottom: auto;
`;

const NavLink = styled.a`
  display: block;
  width: fit-content;
  margin-bottom: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${18/16}rem;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FooterLink = styled.a`
  display: block;
  width: fit-content;
  color: var(--gray-700);
  margin-bottom: 14px;
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
`;

const Overlay = styled(DialogOverlay)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  background: var(--white);
  height: 100%;
  width: calc(100% - 3rem);
  padding: 32px;
`;

export default MobileMenu;
