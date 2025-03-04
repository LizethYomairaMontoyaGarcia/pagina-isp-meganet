import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0px 5px 10px #008542; /* Sombra con opacidad */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  img {
    width: 160px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 27px;
    font-size: 17px;
    font-weight: 650;
  }

  a {
    text-decoration: none;
    color: var( --sixth-color);
    transition: color 0.3s ease;

    &:hover {
      color: var( --room-color);
    }
  }

  .mobile-nav-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  align-items: left;
  width: 90%;
  background-color: var(--fifth-color);
  position: absolute;
  top: 100%;
  right: 0;
  padding: 90px 0;

  ${(props) =>
    props.isOpen &&
    `
    display: flex;
  `}

  ul {
    flex-direction: column;
  }
  li {
    padding: 15px 0;
    list-style: none;
    font-size: 23px;
    font-weight: 600;
    :hover {
      color: var(--primary-color);
      background-color: #d8e3ff;
      border-radius: 10px;
    }
  }
`;
