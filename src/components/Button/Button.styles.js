import styled from "styled-components";
import {Theme} from "../../Utils/Theme";


export const SignInButton = styled.button`
  width: 5.625rem;
  height: 2.25rem;
  border: 1px solid ${Theme.colors.firstSectionColor};
  background-color: ${Theme.colors.lightColor};
  font-weight: 300;
  cursor: pointer;
`

export const HeaderButton = styled(SignInButton)`
  width: 12.5rem;
  height: 5.125rem;
  text-transform: uppercase;
  border: 1px solid ${Theme.colors.sectionColor};
  font-size: 1.25rem;
  margin: 3.125rem 0.625rem;
`