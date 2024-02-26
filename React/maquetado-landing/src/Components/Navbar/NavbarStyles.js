import { styled } from "styled-components";

export const NavbarContainerStyled = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #18191a;
`;
export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  align-items: center;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;
export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
`;
export const HomeContainerStyled = styled(LinkContainerStyled)`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const MenuContainerSyled = styled(LinkContainerStyled)`
  display: none;

  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;
