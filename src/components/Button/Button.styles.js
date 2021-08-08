import styled from "styled-components";
import {Theme} from "../../Utils/Theme";


export const ButtonStyled = styled.button`
  width: 5.625rem;
  height: 2.25rem;
  border: 1px solid ${Theme.colors.firstSectionColor};
  background-color: ${Theme.colors.lightColor};
  font-weight: 300;
  cursor: pointer;
`;

export const HeaderButton = styled(ButtonStyled)`
  width: 12.5rem;
  height: 5.125rem;
  text-transform: uppercase;
  border: 1px solid ${Theme.colors.sectionColor};
  font-size: 1.25rem;
  margin: 3.125rem 0.625rem;
`;

export const FooterButtonStyled = styled(ButtonStyled)`
  border-color: ${Theme.colors.darkColor};
  align-self: flex-end;
  margin-top: 0.75rem;
  cursor: pointer;
`;

export const OrganizationsButton = styled(ButtonStyled)`
  border-color: ${Theme.colors.lightColor};
  width: 7rem;
  height: 2.8rem;
  margin: 2rem 3rem;
  
  &:focus {
    border-color: ${Theme.colors.darkColor};
  }
`
